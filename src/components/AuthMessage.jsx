import React from "react";

const AuthMessage = ({ authorization }) => {
  return authorization ? <div>&nbsp;</div> : <div>Введены неверные данные</div>;
};

export default AuthMessage;
