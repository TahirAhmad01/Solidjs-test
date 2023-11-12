import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h1>Vite + Solid</h1>
      <div class="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-5 bg-gray-600 text-white py-2 rounded-md"
        >
          count is {count()}
        </button>
      </div>
    </div>
  );
}

export default App;
