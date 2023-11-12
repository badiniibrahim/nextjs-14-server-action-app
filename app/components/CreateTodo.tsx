"use client";

import React, { useRef } from "react";
import { createTodoAction } from "../actions";

const CreateTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const action = async (data: FormData) => {
    const title = data.get("todo");
    if (!title || typeof title !== "string") return;
    await createTodoAction(title);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={action}>
      <div className="pb-10 text-[25px] w-fit">To do list</div>
      <div className="flex flex-row gap-3">
        <input
          type="text"
          name="todo"
          placeholder="add new todo..."
          className="pl-2 placeholder:text-xs outline-none rounded-[10px] text-black"
        />
        <button
          type="submit"
          className="bg-red-500 w-[100px] rounded-[10px] text-sm"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default CreateTodo;
