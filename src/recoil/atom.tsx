import { atom } from "recoil";
import { Todo } from "../types";

const todoListAtom = atom<Todo[]>({
  key: "todoListAtom",
  default: undefined,
});

export default todoListAtom;
