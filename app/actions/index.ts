"use server";

import { createTodo, updateTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export const createTodoAction = async (title: string) => {
  await createTodo(title);
  revalidatePath("/");
};

export const updateTodoAction = async (id: string, isCompleted: boolean) => {
  await updateTodo(id, isCompleted);
  revalidatePath("/");
};
