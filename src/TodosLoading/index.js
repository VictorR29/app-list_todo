import React from "react";
import "./TodosLoading.css"

function TodosLoading() {
  return(
    <div className="LoadingTodo__container">
      <span className="LoadingTodo__completeIcon"></span>
      <p className="LoadingTodo__text">Cargando TODOs...</p>
      <span className="LoadingTodo__deleteIcon"></span>
    </div>
  );
};

export {TodosLoading};