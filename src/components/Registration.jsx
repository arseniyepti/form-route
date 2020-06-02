import { Button, Form, Input } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { validationSchemaRegForm } from "../heplers/yupValidation.js";

const mapStateToProps = (state) => {
  const { errors = "" } = state.registration;
  const { email = "", password = "", username = "" } = errors;
  const { registration } = state;
  return {
    email,
    password,
    username,
    registration,
  };
};
const actionCreators = {
  fetchRegistration: actions.fetchRegistration,
};

class Registration extends React.Component {
  render() {
    const {
      email,
      password,
      username,
      history,
      fetchRegistration,
    } = this.props;
    return (
      <Formik
        initialValues={{
          password: "",
          email: "",
          name: "",
        }}
        validationSchema={validationSchemaRegForm}
        onSubmit={async ({ name, email, password }, { resetForm }) => {
          await fetchRegistration(name, email, password);
          const { registration } = this.props;
          if (registration === "finished") {
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
          isSubmitting,
        }) => (
          <Section>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Name<SymSpan>*</SymSpan>
                <Form.Item
                  hasFeedback
                  validateStatus={
                    touched.name && errors.name ? "error" : "validate"
                  }
                  help={touched.name && errors.name ? errors.name : null}
                >
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
                </Form.Item>
              </Label>
              {username ? (
                <div
                  style={{ marginLeft: "auto", color: "red" }}
                >{`Name ${username}`}</div>
              ) : null}
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
                      setFieldTouched("email");
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
              {email ? (
                <div
                  style={{ marginLeft: "auto", color: "red" }}
                >{`Email ${email}`}</div>
              ) : null}
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
                </Form.Item>
              </Label>
              {password ? (
                <div
                  style={{ marginLeft: "auto", color: "red" }}
                >{`Password ${password}`}</div>
              ) : null}
              <Label>
                Repeat Password<SymSpan>*</SymSpan>
                <Form.Item
                  validateStatus={
                    touched.repeatPassword && errors.repeatPassword
                      ? "error"
                      : "validate"
                  }
                  help={
                    touched.repeatPassword && errors.repeatPassword
                      ? errors.repeatPassword
                      : null
                  }
                >
                  <Field
                    onPressEnter={handleSubmit}
                    onChange={(event) => {
                      setFieldTouched("repeatPassword");
                      handleChange(event);
                    }}
                    value={values.repeatPassword}
                    name="repeatPassword"
                    visibilityToggle
                    id="repeatPassword"
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
  width: 550px;
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

const StyledForm = styled(Form)`
  display: flex;
  height: 300px;
  max-width: 550px;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
`;

const SymSpan = styled.span`
  font-size: 16px;
  color: red;
  margin-right: auto;
  margin-left: 2px;
`;

const Label = styled.label`
  display: flex;
  width: 450px;
  justify-content: space-between;
`;
