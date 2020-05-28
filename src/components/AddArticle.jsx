import { Button, Input } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import _uniqueId from "lodash/uniqueId";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  message,
  renderTags,
  getTagValues,
  addTags,
  addTagsEnter,
} from "../heplers/helpers";
import * as actions from "../actions/actions";
import { validationSchemaAddArticle } from "../heplers/yupValidation";

const mapStateToProps = (state) => {
  const { tags, addArticlesFetchingState } = state;
  const { loading } = state.addArticles.UIState;
  return {
    tags,
    loading,
    addArticlesFetchingState,
  };
};

const actionCreators = {
  addTag: actions.addTag,
  fetchAddArticles: actions.fetchAddArticles,
  fetchAddArticleFailure: actions.fetchAddArticleFailure,
  fetchAddArticleFinally: actions.fetchAddArticleFinally,
  fetchArticles: actions.fetchArticles,
  clearTags: actions.clearTags,
};

class AddArticle extends React.Component {
  componentDidMount() {
    const { tags, clearTags, fetchAddArticleFailure } = this.props;
    if (tags.length !== 0) {
      clearTags();
    }
    fetchAddArticleFailure({ none: "none" });
  }

  render() {
    const {
      addTag,
      tags,
      fetchAddArticles,
      loading,
      fetchAddArticleFinally,
      fetchArticles,
      addArticlesFetchingState,
    } = this.props;
    return (
      <Formik
        initialValues={{
          title: "",
          description: "",
          body: "",
          tags: "",
        }}
        validationSchema={validationSchemaAddArticle}
        onSubmit={async (values, { resetForm }) => {
          const tagValues = getTagValues(values, tags);
          fetchAddArticleFinally({ loading: true });
          await fetchAddArticles(values, tagValues);
          await fetchArticles();
          return addArticlesFetchingState === "success" ? resetForm() : null;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleSubmit,
        }) => (
          <Section>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Title
                <Field
                  onPressEnter={handleSubmit}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={values.title}
                  name="title"
                  id="title"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              {(touched.title && errors.title) || <div>&nbsp;</div>}
              <Label>
                Description
                <Field
                  onPressEnter={handleSubmit}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={values.description}
                  name="description"
                  id="description"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              {(touched.description && errors.description) || <div>&nbsp;</div>}
              <Label>
                Text
                <Field
                  autoSize={{ minRows: 2, maxRows: 10 }}
                  onPressEnter={handleSubmit}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={values.body}
                  name="body"
                  id="body"
                  type="text"
                  cols="20"
                  rows="10"
                  component={StyledInputBody}
                />
              </Label>
              {(touched.body && errors.body) || <div>&nbsp;</div>}
              <Label>
                Tags
                <TagsWrap>
                  <Field
                    onChange={handleChange}
                    onPressEnter={addTagsEnter(values.tags, setFieldValue)}
                    value={values.tags}
                    name="tags"
                    id="tags"
                    type="text"
                    component={StyledInputTag}
                  />
                  {renderTags(values, handleChange, tags, StyledInputTag)}
                </TagsWrap>
                <TagsButton
                  type="primary"
                  onClick={addTags(
                    values.tags,
                    setFieldValue,
                    _uniqueId,
                    addTag
                  )}
                >
                  Add
                </TagsButton>
              </Label>
              {message(addArticlesFetchingState)}
              <StyledButton
                loading={loading}
                type="primary"
                onClick={handleSubmit}
              >
                Send
              </StyledButton>
              <StyledLink to="/form-route">Main</StyledLink>
            </StyledForm>
          </Section>
        )}
      </Formik>
    );
  }
}

const ConnectedAddArticle = connect(
  mapStateToProps,
  actionCreators
)(AddArticle);

export default ConnectedAddArticle;

const Section = styled.section`
  width: 600px;
  background-color: rgba(0, 33, 78, 0.12);
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled(Button)`
  width: 100px;
  text-transform: uppercase;
`;

const StyledInput = styled(Input)`
  width: 300px;
  display: flex;
  align-self: flex-start;
`;

const StyledInputTag = styled(Input)`
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  align-self: flex-start;
`;

const StyledInputBody = styled(Input.TextArea)`
  width: 300px;
  display: flex;
  align-self: center;
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 600px;
  padding: 30px 0;
  min-height: 450px;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: baseline;
`;

const TagsWrap = styled.div``;

const TagsButton = styled(Button)`
  position: absolute;
  top: 0;
  right: -80px;
  width: 70px;
`;
