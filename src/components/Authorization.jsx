import { Button, Input } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaAuthForm } from "../heplers/yupValidation";

const mapStateToProps = (state) => {
  const { loading, authorization } = state.authState.UIState;
  const { emailOrPassword } = state.authState.errors;
  return {
    loading,
    authorization,
    emailOrPassword,
  };
};

const actionCreators = {
  fetchAuthorization: actions.fetchAuthorization,
  fetchAuthorizationFinally: actions.fetchAuthorizationFinally,
};

class Authorization extends React.Component {
  render() {
    const { loading, history, emailOrPassword } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={validationSchemaAuthForm}
        onSubmit={async ({ email, password }, { resetForm }) => {
          const { fetchAuthorization, fetchAuthorizationFinally } = this.props;
          fetchAuthorizationFinally({ loading: true });
          const AuthState = await fetchAuthorization({ email, password });
          if (AuthState) {
            resetForm();
            history.push("/form-route");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          handleSubmit,
        }) => (
          <Section>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Email<SymSpan>*</SymSpan>
                <Field
                  onPressEnter={handleSubmit}
                  onChange={(event) => {
                    setFieldTouched("email");
                    handleChange(event);
                  }}
                  value={values.email}
                  name="email"
                  id="email"
                  type="email"
                  component={StyledInput}
                />
              </Label>
              {(touched.email && errors.email) || <div>&nbsp;</div>}
              <Label>
                Password<SymSpan>*</SymSpan>
                <Field
                  onPressEnter={handleSubmit}
                  onChange={(event) => {
                    setFieldTouched("password");
                    handleChange(event);
                  }}
                  value={values.password}
                  name="password"
                  visibilityToggle
                  id="password"
                  type="password"
                  component={StyledInputPassword}
                />
              </Label>
              {(touched.password && errors.password) || <div>&nbsp;</div>}
              <StyledButton
                type="primary"
                onClick={handleSubmit}
                loading={loading}
              >
                Sign in
              </StyledButton>
              {emailOrPassword ? (
                <div>{`Email or password ${emailOrPassword}`}</div>
              ) : null}
              <StyledLink to="/form-route/signup">Sign up</StyledLink>

              <StyledLink to="/form-route">Return to Main</StyledLink>
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

const StyledForm = styled.form`
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
  margin-left: 2px;
`;

const Label = styled.label`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
`;
