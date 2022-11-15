import React, { FC } from "react";
import { BsCheckCircleFill, BsCircle, BsTrashFill } from "react-icons/bs";
import { Todo } from "../../types";

interface Props {
  todo: Todo;
  updateHandler: (todo: Todo) => void;
  deleteHandler: (todo: Todo) => void;
}

const TodoItem: FC<Props> = ({ todo, updateHandler, deleteHandler }) => (
  <div className="flex items-center space-x-4">
    <h3 className="flex-1">{todo.title}</h3>
    <div onClick={() => updateHandler(todo)}>
      {todo.active ? <BsCheckCircleFill /> : <BsCircle />}
    </div>
    <div onClick={() => deleteHandler(todo)}>
      <BsTrashFill />
    </div>
  </div>
);

export default TodoItem;
