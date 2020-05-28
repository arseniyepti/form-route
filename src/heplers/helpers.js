import { formatDistanceToNow } from "date-fns";
import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";

export const convertDate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const message = (result, name) => {
  const nameOfUsing = name === "EditArticle" ? "updated" : "added";
  if (result === "success") {
    return <div>{`Article successfully ${nameOfUsing}`}</div>;
  }
  if (result === 401) {
    return <div>You need to log in</div>;
  }
  return <div>&nbsp;</div>;
};

export const changeLog = () => {
  if (localStorage.getItem("token")) {
    return "Log out";
  }
  return "Sign in";
};

export const changeName = () => {
  const name = localStorage.getItem("username");
  if (name) {
    return name;
  }
  return <Link to="/form-route/signup">Sign up</Link>;
};

export const getOtherArticles = (value, fetchArticles, articlesCount) => () => {
  let count = parseFloat(sessionStorage.getItem("count"));
  if (
    (count === 0 && value === "prev") ||
    (count === articlesCount && value === "next")
  ) {
    return;
  }
  if (value === "start") {
    sessionStorage.setItem("count", 0);
    return fetchArticles();
  }
  if (value === "end") {
    sessionStorage.setItem("count", articlesCount);
    return fetchArticles();
  }
  sessionStorage.setItem("count", value === "next" ? count + 10 : count - 10);
  return fetchArticles();
};

export const setAccessToEdit = (
  nameUI,
  username,
  name,
  authModalStateFailure,
  history,
  slug
) => () => {
  if (!nameUI) {
    return authModalStateFailure();
  }
  if (nameUI !== username) {
    return;
  }
  if (!name) {
    return authModalStateFailure();
  }
  return history.push(`/form-route/${slug}/edit`);
};

export const renderTags = (values, handleChange, tags, StyledInputTag) => {
  return tags.map(({ tag, id }) => {
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
  });
};

export const getTagValues = (values, tags) => {
  return tags
    .map(({ tag, id }) => {
      if (values[`tags${id}`] === "") {
        return;
      }
      return values[`tags${id}`] ? values[`tags${id}`] : tag;
    })
    .filter((tag) => tag !== undefined);
};

export const addTags = (tag, setFieldValue, id, addTag) => () => {
  if (tag === "") {
    return;
  }
  addTag({ tag, id });
  setFieldValue("tags", "");
};
