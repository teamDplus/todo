"use client";

import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  List,
} from "@chakra-ui/react";
import DeleteButton from "./components/Atoms/Button/DeleteButton";
import EditButton from "./components/Atoms/Button/EditButton";
import AddButton from "./components/Atoms/Button/AddButton";
import { useState } from "react";

export default function TodoUI() {
  type Todo = { id: string; title: string; completed: boolean };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: inputValue,
      completed: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
    setInputValue("");
  };

  return (
    <>
      <Box
        bg="gray.100"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg={"white"}
          w={"full"}
          maxW={"xl"}
          boxShadow={"xl"}
          rounded={"2xl"}
          p={"6"}
          gap={"6"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading
            as="h2"
            fontSize={"3xl"}
            fontWeight={"bold"}
            color={"gray.800"}
            textAlign={"center"}
          >
            ToDoアプリ
          </Heading>
          <HStack gap={"2"}>
            <Input
              placeholder="新しいタスクを追加"
              bg={"gray.50"}
              borderRadius={"xl"}
              px={"4"}
              py={"2"}
              flex={"1"}
              _focus={{ ring: 2, ringColor: "blue.300", outline: "none" }}
              value={inputValue}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />
            <AddButton onClick={addTodo} />
          </HStack>
          <List.Root spaceY={"3"}>
            {todos.map((todo) => (
              <List.Item
                key={todo.id}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"gray.50"}
                p={"3"}
                rounded={"lg"}
                shadow={"sm"}
              >
                <Checkbox.Root>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label textDecoration="line-through">
                    {todo.title}
                  </Checkbox.Label>
                </Checkbox.Root>
                <HStack gap={"2"}>
                  <EditButton />
                  <DeleteButton />
                </HStack>
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
    </>
  );
}
