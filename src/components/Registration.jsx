import { Button, Input } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaRegForm } from "../heplers/yupValidation.js";

const mapStateToProps = (state) => {
  const { registration, loading } = state.regState.UIState;
  const { email, password, username } = state.regState.errors;
  return {
    registration,
    loading,
    email,
    password,
    username,
  };
};
const actionCreators = {
  fetchRegistration: actions.fetchRegistration,
  fetchRegistrationFinally: actions.fetchRegistrationFinally,
};

class Registration extends React.Component {
  render() {
    const { loading, email, password, username, history } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
          name: "",
        }}
        validationSchema={validationSchemaRegForm}
        onSubmit={async ({ name, email, password }, { resetForm }) => {
          const { fetchRegistration, fetchRegistrationFinally } = this.props;
          fetchRegistrationFinally({ loading: true });
          const regStateResult = await fetchRegistration(name, email, password);
          if (regStateResult) {
            resetForm();
            history.push("/form-route/login");
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
                Name<SymSpan>*</SymSpan>
                <Field
                  onPressEnter={handleSubmit}
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
              {(touched.name && errors.name) || null}
              {username ? (
                <div style={{ marginLeft: "auto" }}>{`Name ${username}`}</div>
              ) : null}
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
              {(touched.email && errors.email) || null}
              {email ? (
                <div style={{ marginLeft: "auto" }}>{`Email ${email}`}</div>
              ) : null}
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
              {(touched.password && errors.password) || null}
              {password ? (
                <div
                  style={{ marginLeft: "auto" }}
                >{`Password ${password}`}</div>
              ) : null}
              <StyledButton
                type="primary"
                onClick={handleSubmit}
                loading={loading}
              >
                Sign up
              </StyledButton>
              <StyledLink to="/form-route/login">Sign in</StyledLink>
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
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
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
  max-width: 400px;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
