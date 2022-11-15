import { Todo } from "../types";

const key = "todoListStorage";

const todoListStorage = {
  getTodoList() {
    try {
      const stringifyTodoList = localStorage.getItem(key);
      if (!stringifyTodoList) return [];
      return JSON.parse(stringifyTodoList);
    } catch (error) {
      return [];
    }
  },
  setTodoList(todoList: Todo[]) {
    try {
      const stringifyTodoList = JSON.stringify(todoList);
      localStorage.setItem(key, stringifyTodoList);
    } catch (error) {
      localStorage.setItem(key, JSON.stringify([]));
    }
  },
};

export default todoListStorage;
