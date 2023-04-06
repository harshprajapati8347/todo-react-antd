import React, { useContext } from "react";
import { TodoContext } from "../../App";

import { Button } from "antd";

export const Done = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#done"
      onClick={() => {
        dispatchTodos({
          type: "DONE",
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Done</Button>
    </a>
  );
};

// WORKING

export const Working = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#working"
      onClick={() => {
        dispatchTodos({
          type: "WORKING",
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Working</Button>
    </a>
  );
};

// OVERDUE

export const Overdue = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#overdue"
      onClick={() => {
        dispatchTodos({
          type: "OVERDUE",
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Overdue</Button>
    </a>
  );
};

// OPEN

export const Open = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#open"
      onClick={() => {
        dispatchTodos({
          type: "OPEN",
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Open</Button>
    </a>
  );
};
