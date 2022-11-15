import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import TodoApp from "./components/todo";

interface Props {}

const App: FC<Props> = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl p-4 mx-auto mt-12">
      <h1 className="text-3xl font-bold">todo-webpack</h1>
      <TodoApp />
    </div>
  );
};

export default App;
