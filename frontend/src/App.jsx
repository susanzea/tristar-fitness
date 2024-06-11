import { useState, useEffect } from "react";
import { getWeekday } from "./utils/helpers";
import { getWorkoutTypes } from "./utils/apiWorkoutType";
import { getWorkoutSessions } from "./utils/apiWorkoutSession";
import Navbar from "./components/Navbar/Navbar";
import SessionsIndex from "./components/SessionsIndex/SessionsIndex";
import PlotSection from "./components/Plot/Plot";
import "./styles/style.scss";
import "./styles/_base.scss";

function App() {
  const [weekStart, setWeekStart] = useState(getWeekday(0));
  const [workoutSessionsData, setWorkoutSessionsData] = useState(null);
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [workoutTypeOptions, setWorkoutTypeOptions] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  const fetchTypes = async () => {
    const types = await getWorkoutTypes();
    setWorkoutTypes(types);
  };

  useEffect(() => {
    console.log("fetching types");
    fetchTypes();
  }, []);

  useEffect(() => {
    const typeOptions = workoutTypes.map((t) => ({
      value: t.id,
      label: t.name,
    }));
    setWorkoutTypeOptions(typeOptions);
  }, [workoutTypes]);

  const fetchSessions = async () => {
    const sessions = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
    });
    console.log(sessions);

    setWorkoutSessionsData(sessions);
  };

  useEffect(() => {
    console.log("fetching session");
    fetchSessions();
  }, []);

  return (
    <div className='page cabin'>
      <Navbar weekStart={weekStart} setWeekStart={setWeekStart} />
      <div className='content-container'>
        {workoutSessionsData && (
          <SessionsIndex
            weekStart={weekStart}
            workoutTypes={workoutTypes}
            workoutTypeOptions={workoutTypeOptions}
            fetchSessions={fetchSessions}
            workoutSessionsData={workoutSessionsData}
          />
        )}

        <PlotSection
          weekStart={weekStart}
          workoutTypeOptions={[
            { value: "", label: "all" },
            ...workoutTypeOptions,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
