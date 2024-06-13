import { useState, useEffect } from "react";
import { getWeekday } from "./utils/helpers";
import { getWorkoutTypes } from "./utils/apiWorkoutType";
import { getWorkoutSessions } from "./utils/apiWorkoutSession";
import MetricTile from "./components/MetricTile";
import Navbar from "./components/Navbar/Navbar";
import SessionsSection from "./components/SessionsSection/SessionsSection";
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

  // fetching and setting workout types
  const fetchTypes = async () => {
    const types = await getWorkoutTypes();
    setWorkoutTypes(types);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    const typeOptions = workoutTypes.map((t) => ({
      value: t.id,
      label: t.name,
    }));
    setWorkoutTypeOptions(typeOptions);
  }, [workoutTypes]);

  // fetching and setting workout sessions data (total, individual sessions)
  const fetchSessions = async () => {
    const sessions = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
    });

    setWorkoutSessionsData(sessions);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className='page cabin'>
      <Navbar weekStart={weekStart} setWeekStart={setWeekStart} />
      <div className='content-container'>
        {workoutSessionsData && (
          <>
            <div
              id='tiles-section'
              style={{
                display: "flex",
                width: "100%",
                border: "1px solid red",
              }}>
              <MetricTile metric={workoutSessionsData.total} description={'total workouts'} />
              <MetricTile />
            </div>
            <SessionsSection
              weekStart={weekStart}
              workoutTypes={workoutTypes}
              workoutTypeOptions={workoutTypeOptions}
              fetchSessions={fetchSessions}
              workoutSessionsData={workoutSessionsData}
            />
          </>
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
