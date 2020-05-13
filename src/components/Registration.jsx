import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaRegForm } from "../heplers/yupValidation.js";
import RegMessage from "./RegMessage.jsx";

const mapStateToProps = (state) => {
  const { regState } = state;
  return {
    registration: regState.UIState.registration,
    loading: regState.UIState.loading,
  };
};

const actionCreators = {
  setRegState: actions.setRegState,
  RegBtnLoading: actions.RegBtnLoading,
};

class Registration extends React.Component {
  render() {
    const { registration, loading } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
          name: "",
        }}
        validationSchema={validationSchemaRegForm}
        onSubmit={({ name, email, password }, { resetForm }) => {
          const { setRegState, RegBtnLoading } = this.props;
          RegBtnLoading({ loading: true });
          setRegState(name, email, password);
          if (registration) {
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
                Имя<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched("name");
                    handleChange(event);
                  }}
                  value={values.name}
                  name="name"
                  id="name"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              {(touched.name && errors.name) || <div>&nbsp;</div>}
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
                Регистрация
              </StyledButton>
              {<RegMessage registration={registration} />}
              <StyledLink to="/form-route/login">Войти</StyledLink>
            </StyledForm>
          </Section>
        )}
      </Formik>
    );
  }
}

const ConnectedRegistration = connect(
  mapStateToProps,
  actionCreators
)(Registration);

export default ConnectedRegistration;

const Section = styled.section`
  padding: 30px;
  width: 500px;
  background-color: rgba(0, 33, 78, 0.12);
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 5px;
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
  height: 300px;
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
