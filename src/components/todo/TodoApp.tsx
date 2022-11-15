import React, { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import todoListAtom from "../../recoil";
import todoListStorage from "../../storages/todoListStorage";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface Props {}

const TodoApp: FC<Props> = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  useEffect(() => {
    if (!todoList) {
      const savedTodoList = todoListStorage.getTodoList();
      setTodoList(savedTodoList);
    }
  }, [todoList]);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoApp;
