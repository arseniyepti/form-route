import { ExclamationCircleOutlined } from "@ant-design/icons";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Modal, notification } from "antd";

export const convertDate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const message = (result) => {
  if (result === "authError") {
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

export const openNotification = () => {
  notification.open({
    message: "Message from server",
    description: "Ooops, something wrong",
    duration: 2,
  });
};

export const showConfirm = (slug, fetchDeleteArticles, fetchArticles) => () => {
  Modal.confirm({
    icon: <ExclamationCircleOutlined />,
    content: "Are you sure?",
    onOk: async () => {
      await fetchDeleteArticles(slug);
      await fetchArticles();
    },
    onCancel() {},
  });
};

export const showModal = (state, authModalState) => {
  return authModalState === "failed" || state;
};

export const handleOk = (history, authModalStateSuccess) => () => {
  authModalStateSuccess();
  showModal(false, "failed");
  return history.push("/form-route/login");
};

export const onCancel = (authModalStateSuccess) => () => {
  showModal(false, "failed");
  return authModalStateSuccess();
};

export const changeName = () => {
  const name = localStorage.getItem("username");
  if (name) {
    return name;
  }
  return <Link to="/form-route/signup">Sign up</Link>;
};

export const setAccess = (
  name,
  authModalStateFailure,
  history,
  slug,
  value
) => () => {
  if (!name) {
    return authModalStateFailure();
  }
  return value === "add"
    ? history.push(`/form-route/add`)
    : history.push(`/form-route/${slug}/edit`);
};
