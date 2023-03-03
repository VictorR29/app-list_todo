import React from "react";
import "./EmptyTodos.css"

function EmptyTodos() {
  return (
    <div className="EmptyTodo__container">
      <p className="EmptyTodo__title">¿No has creado ningun TODO?</p>
      <p className="EmptyTodo__text">!Crea tu primer TODO¡</p>
    </div>
  );
};

export {EmptyTodos};