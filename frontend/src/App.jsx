import "./styles/style.scss";
import "./styles/_base.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='page cabin'>
      <Navbar />
      <div className='content-container'>
        <h1>ello mate</h1>
      </div>
    </div>
  );
}

export default App;
