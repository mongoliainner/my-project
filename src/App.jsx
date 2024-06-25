import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="grid gap-8 md:grid-cols-2 md: item-center md:text-left">
        <h1 className="text: ">11</h1>
        <div className="w-full">1</div>
      </section>
    </>
  );
}

export default App;
