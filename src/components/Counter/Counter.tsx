"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from "@/store/counter";
import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <Stack direction="row">
        <Button onClick={() => dispatch(increment())}>+</Button>
        <span>{count}</span>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </Stack>
      <Stack>
        <Input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add amount
        </Button>
        <Button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add async
        </Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add if odd
        </Button>
      </Stack>
    </div>
  );
};
