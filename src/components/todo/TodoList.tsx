import React, { FC } from "react";
import { useRecoilState } from "recoil";
import todoListAtom from "../../recoil";
import todoListStorage from "../../storages/todoListStorage";
import { Todo } from "../../types";
import TodoItem from "./TodoItem";

interface Props {}

const TodoList: FC<Props> = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const updateHandler = (todo: Todo) => {
    if (!todoList) return;
    const newTodoList = todoList.map((data) =>
      data.id === todo.id ? { ...data, active: !data.active } : data
    );
    setTodoList(newTodoList);
    todoListStorage.setTodoList(newTodoList);
  };

  const deleteHandler = (todo: Todo) => {
    if (!todoList) return;
    const newTodoList = todoList.filter((data) => data.id !== todo.id);
    setTodoList(newTodoList);
    todoListStorage.setTodoList(newTodoList);
  };

  return (
    <div className="mt-4">
      {todoList?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
