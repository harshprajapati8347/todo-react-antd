import { v4 as uuidv4 } from "uuid";

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: "Default TODO from INITIAL_STATE.js",
    description: "Default TODO from INITIAL_STATE.js",
    timestamp: new Date().toISOString().slice(0, 10),
    date: new Date().toISOString().slice(0, 10),
    status: "OPEN",
    completed: "false",
    dataIndex: 0,
  },
];
