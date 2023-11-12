import { FC } from "react";
import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
};

const TotoItemList: FC<Props> = ({ todos }) => {
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TotoItemList;
