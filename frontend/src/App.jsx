import { useState, useEffect } from "react";
import { getWeekday } from "./utils/helpers";
import { getWorkoutTypes } from "./utils/apiWorkoutType";
import Navbar from "./components/Navbar/Navbar";
import SessionsIndex from "./components/SessionsIndex/SessionsIndex";
import PlotSection from "./components/Plot/Plot";
import "./styles/style.scss";
import "./styles/_base.scss";

function App() {
  const [weekStart, setWeekStart] = useState(getWeekday(0));
  const [workoutTypes, setWorkoutTypes] = useState([]);


   const fetchTypes = async () => {
     const types = await getWorkoutTypes();
     setWorkoutTypes(types);
   };

   useEffect(() => {
     fetchTypes();
   }, []);

  return (
    <div className='page cabin'>
      <Navbar weekStart={weekStart} setWeekStart={setWeekStart} />
      <div className='content-container'>
        <SessionsIndex weekStart={weekStart} workoutTypes={workoutTypes} />
        <PlotSection weekStart={weekStart} workoutTypes={workoutTypes} />
      </div>
    </div>
  );
}

export default App;
