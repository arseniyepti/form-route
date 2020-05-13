import React from "react";

const RegMessage = ({ registration }) => {
  if (registration === undefined) {
    return <div>&nbsp;</div>;
  }
  return registration ? (
    <div>Регистрация прошла успешно, нажмите "Войти"</div>
  ) : (
    <div>Данный email уже существует</div>
  );
};

export default RegMessage;
