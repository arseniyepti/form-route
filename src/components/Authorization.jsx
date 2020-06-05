import { Button, Input, Form } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaAuthForm } from "../heplers/yupValidation";

const mapStateToProps = (state) => {
  const { authErrors = "" } = state.error;
  const { emailOrPassword = "" } = authErrors;
  return {
    emailOrPassword,
  };
};

const actionCreators = {
  fetchAuthorization: actions.fetchAuthorization,
};

class Authorization extends React.Component {
  render() {
    const { history, emailOrPassword, fetchAuthorization } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={validationSchemaAuthForm}
        onSubmit={async ({ email, password }, { resetForm }) => {
          const state = await fetchAuthorization({ email, password });
          if (state) {
            resetForm();
            history.push("/form-route/");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Section>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Email<SymSpan>*</SymSpan>
                <Form.Item
                  hasFeedback
                  validateStatus={
                    touched.email && errors.email ? "error" : "validate"
                  }
                  help={touched.email && errors.email ? errors.email : null}
                >
                  <Field
                    onPressEnter={handleSubmit}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    value={values.email}
                    name="email"
                    id="email"
                    type="email"
                    component={StyledInput}
                  />
                </Form.Item>
              </Label>
              <Label>
                Password<SymSpan>*</SymSpan>
                <Form.Item
                  validateStatus={
                    touched.password && errors.password ? "error" : "validate"
                  }
                  help={
                    touched.password && errors.password ? errors.password : null
                  }
                >
                  <Field
                    onPressEnter={handleSubmit}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    value={values.password}
                    name="password"
                    visibilityToggle
                    id="password"
                    type="password"
                    component={StyledInputPassword}
                  />
                </Form.Item>
              </Label>
              <StyledButton
                type="primary"
                onClick={handleSubmit}
                loading={isSubmitting}
              >
                Sign in
              </StyledButton>
              {emailOrPassword ? (
                <div
                  style={{ color: "red" }}
                >{`Email or password ${emailOrPassword}`}</div>
              ) : null}
              <StyledLink to="/form-route/signup">Sign up</StyledLink>

              <StyledLink to="/form-route/">Return to Main</StyledLink>
            </StyledForm>
          </Section>
        )}
      </Formik>
    );
  }
}

const ConnectedAuthorization = connect(
  mapStateToProps,
  actionCreators
)(Authorization);

export default ConnectedAuthorization;

const Section = styled.section`
  padding: 30px;
  width: 500px;
  background-color: rgba(0, 33, 78, 0.12);
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100px;
`;

const StyledInput = styled(Input)`
  width: 300px;
  display: flex;
  align-self: flex-start;
`;

const StyledInputPassword = styled(Input.Password)`
  width: 300px;
  display: flex;
  align-self: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  height: 220px;
  max-width: 400px;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;

const SymSpan = styled.span`
  font-size: 16px;
  color: red;
  margin-right: auto;
`;

const Label = styled.label`
  display: inline-flex;
  width: 400px;
  vertical-align: baseline;
  justify-content: space-between;
`;
