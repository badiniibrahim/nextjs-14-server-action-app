import { prisma } from "./prisma";

export const getTodos = async () => {
  try {
    const todos = await prisma.todo.findMany();
    console.log(todos);

    return { todos };
  } catch (error) {
    return { error };
  }
};

export const createTodo = async (title: string) => {
  try {
    const todo = await prisma.todo.create({ data: { title } });
    return { todo };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const updateTodo = async (id: string, isCompleted: boolean) => {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
};
