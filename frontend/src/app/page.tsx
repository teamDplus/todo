"use client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import createApolloClient from "./graphql/apollo-client";

const client = createApolloClient();

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type GetTodosData = {
  todos: Todo[];
};

const GET_TODOS = gql`
  query {
    todos {
      id
      title
      completed
    }
  }
`;

export default function Todos() {
  const { data, loading } = useQuery<GetTodosData>(GET_TODOS, { client });
  
  if (loading) return <p>Loading...</p>;

  return (
    <>
   <h2>Hello</h2> 
    <ul>
      {data?.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
    </>
  );
}
