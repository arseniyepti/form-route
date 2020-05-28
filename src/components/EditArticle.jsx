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
  const { tags, updateArticlesFetchingState } = state;
  const { loading } = state.addArticles.UIState;
  return {
    tags,
    loading,
    updateArticlesFetchingState,
  };
};

const actionCreators = {
  addTag: actions.addTag,
  fetchUpdateArticles: actions.fetchUpdateArticles,
  fetchUpdateArticleFinally: actions.fetchUpdateArticleFinally,
  fetchUpdateArticleFailure: actions.fetchUpdateArticleFailure,
  fetchArticles: actions.fetchArticles,
  changeTag: actions.changeTag,
};

class EditArticle extends React.Component {
  componentDidMount() {
    const {
      article: { tagList },
      changeTag,
      fetchUpdateArticleFailure,
    } = this.props;
    changeTag({ tagList, id: _uniqueId });
    fetchUpdateArticleFailure({ none: "none" });
  }

  render() {
    const {
      addTag,
      tags,
      article: { title, body, description, slug },
      fetchUpdateArticles,
      loading,
      fetchUpdateArticleFinally,
      fetchArticles,
      updateArticlesFetchingState,
    } = this.props;
    return (
      <Formik
        initialValues={{
          title: title,
          description: description,
          body: body,
          tags: "",
        }}
        validationSchema={validationSchemaAddArticle}
        onSubmit={async (values, { resetForm }) => {
          const tagValues = getTagValues(values, tags);
          fetchUpdateArticleFinally({ loading: true });
          await fetchUpdateArticles(values, tagValues, slug);
          await fetchArticles();
          return updateArticlesFetchingState === "success" ? resetForm() : null;
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  {renderTags(values.tags, handleChange, tags, StyledInputTag)}
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
              {message(updateArticlesFetchingState, "EditArticle")}
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

const ConnectedEditArticle = connect(
  mapStateToProps,
  actionCreators
)(EditArticle);

export default ConnectedEditArticle;

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
  height: 500px;
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
  //padding-bottom: 20px;
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
