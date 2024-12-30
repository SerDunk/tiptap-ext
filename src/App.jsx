import "./index.css";
import TipTap from "./TipTap";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-blue-100">
      <div className="mt-2 text-center">
        <h1 className="text-3xl font-bold">Tip Tap Extension</h1>
        <p className="max-w-3xl py-8 font-semibold">
          The WordCount extension dynamically tracks the word count in a Tiptap
          editor. It uses the onUpdate lifecycle hook to update the word count
          in storage whenever the content changes. This enables seamless
          integration with components to display the live word count.
        </p>
      </div>
      <TipTap />
    </div>
  );
}

export default App;
