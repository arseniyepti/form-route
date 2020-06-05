import { Form, Button, Input } from "antd";
import { Field, Formik, FieldArray } from "formik";
import React from "react";
import { connect } from "react-redux";
import _uniqueId from "lodash/uniqueId";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { message } from "../heplers/helpers";
import * as actions from "../actions/actions";
import { validationSchemaAddArticle } from "../heplers/yupValidation";

const mapStateToProps = (state) => {
  const { error } = state;
  return {
    error,
  };
};

const actionCreators = {
  fetchAddEditArticles: actions.fetchAddEditArticles,
};

class AddEditArticle extends React.Component {
  addIdToTagList = (tagList) => {
    return tagList.length === 0
      ? []
      : tagList.map((tag) => ({ tag, id: _uniqueId() }));
  };

  render() {
    const { error, fetchAddEditArticles, history } = this.props;
    const { article = "" } = this.props;
    const {
      slug = "",
      description = "",
      tagList = [],
      title = "",
      body = "",
    } = article;
    return (
      <Formik
        initialValues={{
          title: title,
          description: description,
          body: body,
          tags: this.addIdToTagList(tagList),
        }}
        validationSchema={validationSchemaAddArticle}
        onSubmit={async (values) => {
          const tags = values.tags
            .map(({ tag, id }) => {
              if (values[`tags${id}`] && values[`tags${id}`] !== tag) {
                return values[`tags${id}`];
              }
              return tag;
            })
            .filter((tag) => tag !== "");
          const action = article ? "edit" : "add";
          const state = await fetchAddEditArticles(values, tags, action, slug);
          if (!article && state) {
            history.push("/form-route/");
          }
          if (article && state) {
            history.go(-1);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleSubmit,
          isSubmitting,
        }) => (
          <Section>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Title<Span>*</Span>
                <Form.Item
                  hasFeedback
                  validateStatus={
                    touched.title && errors.title ? "error" : "validate"
                  }
                  help={touched.title && errors.title ? errors.title : null}
                >
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
                </Form.Item>
              </Label>
              <Label>
                Description<Span>*</Span>
                <Form.Item
                  hasFeedback
                  validateStatus={
                    touched.description && errors.description
                      ? "error"
                      : "validate"
                  }
                  help={
                    touched.description && errors.description
                      ? errors.description
                      : null
                  }
                >
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
                </Form.Item>
              </Label>
              <Label>
                Text<Span>*</Span>
                <Form.Item
                  hasFeedback
                  validateStatus={
                    touched.body && errors.body ? "error" : "validate"
                  }
                  help={touched.body && errors.body ? errors.body : null}
                >
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
                </Form.Item>
              </Label>
              <Label>
                Tags
                <TagsWrap>
                  <FieldArray
                    name="tags"
                    render={(arrayHelpers) => {
                      const addTags = () => {
                        setFieldValue("tag", "");
                        return arrayHelpers.unshift({
                          tag: values.tag,
                          id: _uniqueId(),
                        });
                      };
                      return (
                        <>
                          <Field
                            onChange={handleChange}
                            onPressEnter={addTags}
                            value={values.tag}
                            name="tag"
                            id="tag"
                            type="text"
                            component={StyledInputTag}
                          />
                          {values.tags.map(({ tag, id }) => {
                            return (
                              <Field
                                key={id}
                                defaultValue={tag}
                                value={values[`tags${id}`]}
                                onChange={handleChange}
                                id={`tags${id}`}
                                name={`tags${id}`}
                                type="text"
                                component={StyledInputTag}
                              />
                            );
                          })}
                          <TagsButton type="primary" onClick={addTags}>
                            Add
                          </TagsButton>
                        </>
                      );
                    }}
                  />
                </TagsWrap>
              </Label>
              {message(error)}
              <StyledButton
                loading={isSubmitting}
                type="primary"
                onClick={handleSubmit}
              >
                {article ? "Edit" : "Add"}
              </StyledButton>
              <StyledLink to="/form-route/">Main</StyledLink>
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
)(AddEditArticle);

export default withRouter(ConnectedAddArticle);

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

const Span = styled.span`
  font-size: 18px;
  color: red;
  margin-right: auto;
  margin-left: 2px;
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

const StyledForm = styled(Form)`
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
  width: 420px;
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
