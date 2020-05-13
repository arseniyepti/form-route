import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaAuthForm } from "../heplers/yupValidation.js";
import AuthMessage from "./AuthMessage";

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    isLogged: authState.isLogged,
    loading: authState.UIState.loading,
    authorization: authState.UIState.authorization,
  };
};

const actionCreators = {
  setAuthState: actions.setAuthState,
  AuthBtnLoading: actions.AuthBtnLoading,
};

class Authorization extends React.Component {
  render() {
    const { loading, authorization, history } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={validationSchemaAuthForm}
        onSubmit={({ email, password }, { resetForm }) => {
          const { setAuthState, AuthBtnLoading } = this.props;
          AuthBtnLoading({ loading: true });
          setAuthState(history, { email, password });
          if (authorization && loading) {
            resetForm();
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
                Пароль<SymSpan>*</SymSpan>
                <Field
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
              <StyledButton loading={loading} htmlType="submit">
                Войти
              </StyledButton>
              <AuthMessage authorization={authorization} />
              <StyledLink to="/form-route/signup">Регистрация</StyledLink>
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
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;

const SymSpan = styled.span`
  font-size: 25px;
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
