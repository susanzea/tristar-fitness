import { useState } from "react";
import { getWeekday } from "./utils";
import Navbar from "./components/Navbar/Navbar";
import "./styles/style.scss";
import "./styles/_base.scss";

function App() {
  const [weekStart, setWeekStart] = useState(getWeekday(0));

  return (
    <div className='page cabin'>
      <Navbar
        weekStart={weekStart}
        setWeekStart={setWeekStart}
      />
      <div className='content-container'>
        <h1>ello mate</h1>
      </div>
    </div>
  );
}

export default App;
