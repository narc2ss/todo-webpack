import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import todoListAtom from "../../recoil";
import todoListStorage from "../../storages/todoListStorage";
import { Todo } from "../../types";

interface Props {}

const TodoForm: FC<Props> = ({}) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const createTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return null;

    const newTodo: Todo = {
      id: Date.now(),
      title: todo,
      active: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    todoListStorage.setTodoList(newTodoList);
    setTodo("");
  };

  return (
    <form onSubmit={createTodoHandler} className="flex items-center">
      <input
        type="text"
        placeholder="할일 입력"
        value={todo}
        onChange={inputHandler}
        className="flex-1 text-black"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
