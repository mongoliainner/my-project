import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-sky-500 ~px-4/8">
        <h3 className="text-6xl text-red-500">react+tailwind</h3>
      </div>
    </>
  );
}

export default App;
