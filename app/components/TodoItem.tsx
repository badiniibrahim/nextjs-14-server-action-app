"use client";

import { Todo } from "@prisma/client";
import { FC, useTransition } from "react";
import { updateTodoAction } from "../actions";

type Props = {
  todo: Todo;
};
const TodoItem: FC<Props> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="mt-4 flex flex-row gap-2">
      <input
        id={todo.id}
        defaultChecked={todo.isCompleted}
        type="checkbox"
        onChange={(e) =>
          startTransition(() => updateTodoAction(todo.id, e.target.checked))
        }
        className="peer cursor-pointer rounded-sm"
        aria-disabled={isPending}
      />
      <label
        htmlFor={todo.id}
        className="peer-checked:line-through peer-checked:text-red-700"
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoItem;
