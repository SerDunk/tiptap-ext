import "./index.css";
import TipTap from "./TipTap";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div>
        <h1>Tip Tap Extension</h1>
        <p>Extension description</p>
      </div>
      <TipTap />
    </div>
  );
}

export default App;
