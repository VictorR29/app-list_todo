import React from "react";
import { TodoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButtom } from "../CreateTodoButton";
import { Modal } from "../modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } =  React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter/>
      
      <TodoSearch/>
     
      
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && new Array(4).fill(1).map((a,i) => <TodosLoading key={i}/>)} 
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
        
       {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
       )}

      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
};

export {AppUI};
