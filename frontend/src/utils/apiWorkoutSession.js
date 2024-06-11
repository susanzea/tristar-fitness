import axios from "axios";
import { paramsGenerator } from "./helpers";
const baseUrl = "http://localhost:5000";

export const getWorkoutSessions = async (params) => {
  const url = `${baseUrl}/workout-session?${
    params ? paramsGenerator(params) : ""
  }`;
  const data = await axios.get(url);

  return data.data;
};

export const createWorkoutSession = async (sessionData) => {
  const data = await axios.post(`${baseUrl}/workout-session`, sessionData);

  return data.data;
};
