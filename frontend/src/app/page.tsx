"use client";

import { Box, Button, HStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function TodoUI() {
  // 仮データ（見た目確認用）
  const [todos] = useState([
    { id: 1, title: "買い物に行く", completed: false },
    { id: 2, title: "Next.js の勉強", completed: true },
    { id: 3, title: "Todo App のデザインを作る", completed: false },
  ]);

  return (
   <div>
      <h2>ToDoアプリ</h2>
      <HStack >
        <Textarea placeholder="Comment..." />
        <Button>追加</Button>
      </HStack>
    </div>
  );
}
