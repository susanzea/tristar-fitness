/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [totalWorkoutSessions, setTotalWorkoutSessions] = useState(null);
  const [workoutSessions, setWorkoutSessions] = useState(null);
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [workoutDurationByDay, setWorkoutDurationByDay] = useState([]);
  const [workoutDurationWeekTotal, setWorkoutDurationWeekTotal] = useState(0);
  const [workoutTypeOptions, setWorkoutTypeOptions] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  // fetching and setting workout types
  const fetchTypes = async () => {
    console.log("fetching types");
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
    console.log("fetching sessions");
    const sessions = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
    });

    const durationData = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
      duration: true,
    });

    setTotalWorkoutSessions(sessions.total);
    setWorkoutSessions(sessions.workout_sessions);
    setWorkoutDurationByDay(durationData.duration_min_by_date);
    setWorkoutDurationWeekTotal(durationData.week_total_duration_min);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className='page cabin'>
      <Navbar weekStart={weekStart} setWeekStart={setWeekStart} />
      <div className='content-container'>
        {workoutSessions && (
          <>
            <div
              id='tiles-section'
              style={{
                display: "flex",
                width: "100%",
              }}>
              <MetricTile
                variant={"sessions"}
                metric={totalWorkoutSessions}
                description={"total workouts"}
              />
              <MetricTile
                variant={"time"}
                metric={workoutDurationWeekTotal}
                description={"time spent"}
              />
            </div>
            <SessionsSection
              weekStart={weekStart}
              workoutTypes={workoutTypes}
              workoutTypeOptions={workoutTypeOptions}
              fetchSessions={fetchSessions}
              workoutSessions={workoutSessions}
            />
          </>
        )}
        <PlotSection
          weekStart={weekStart}
          workoutTypeOptions={[
            { value: "", label: "all" },
            ...workoutTypeOptions,
          ]}
          fetchSessions={fetchSessions}
        />
      </div>
    </div>
  );
}

export default App;
