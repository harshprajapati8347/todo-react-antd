import { v4 as uuidv4 } from "uuid";
import { openNotification } from "./openNotification";

export function todoReducer(state, action) {
  const [title, description, timestamp, date, status] = action.payload || "";

  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
        
    case "ADD_TODO":
      openNotification("bottomLeft", "TODO added");
      state.push({
        title,
        description,
        timestamp,
        date,
        status,
        key: uuidv4(),
        completed: "false",
      });
      break;

    case "UPDATE_TODO":
      openNotification("bottomLeft", "TODO edited");
      const todoToUpdate = state.filter(
        (todo) => todo.key === action.payload.key
      )[0];
      if (todoToUpdate) {
        todoToUpdate.title = title;
        todoToUpdate.description = description;
        todoToUpdate.timestamp = timestamp;
        todoToUpdate.date = date;
        todoToUpdate.status = status;
      }
      break;

    case "DONE":
      openNotification("bottomLeft", "TODO completed");
      const todoToComplete = state.filter(
        (todo) => todo.key === action.payload
      )[0];
      if (todoToComplete) {
        todoToComplete.completed = "true";
        todoToComplete.status = "DONE";
      }
      break;

    case "DELETE_TODO":
      openNotification("bottomLeft", "TODO deleted");
      return state.filter((item) => item.key !== action.payload);
    default:
      openNotification("bottomLeft", "An error has occured!");
      throw new Error();
  }
}
