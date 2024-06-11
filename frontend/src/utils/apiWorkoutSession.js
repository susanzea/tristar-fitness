import axios from "axios";
import { paramsGenerator } from "./helpers";
const baseUrl = "http://localhost:5000";

export const getWorkoutSessions = async (params) => {
  debugger;
  const url = `${baseUrl}/workout-session?${
    params ? paramsGenerator(params) : ""
  }`;
  debugger;
  const data = await axios.get(url);

  return data.data;
};
