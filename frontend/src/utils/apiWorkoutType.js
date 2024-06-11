import axios from "axios";
const baseUrl = "http://localhost:5000";

export const getWorkoutTypes = async (includeTotal = false) => {
  const data = await axios.get(`${baseUrl}/workout-type`);

  return includeTotal ? data.data : data.data.workout_types;
};
