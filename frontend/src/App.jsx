// import { useState } from "react";
import { getWeekday } from "./utils";
import Navbar from "./components/Navbar/Navbar";
import "./styles/style.scss";
import "./styles/_base.scss";

function App() {
  const SundayDateTime = getWeekday(0);

  return (
    <div className='page cabin'>
      <Navbar weekStart={SundayDateTime} />
      <div className='content-container'>
        <h1>ello mate</h1>
      </div>
    </div>
  );
}

export default App;
