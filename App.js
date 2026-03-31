import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import Dashboard from "./Dashboard";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen p-5 bg-white dark:bg-gray-900 text-black dark:text-white">

        <button 
          onClick={() => setDark(!dark)}
          className="bg-secondary px-4 py-2 text-white rounded"
        >
          Toggle Mode
        </button>

        <h1 className="text-3xl text-primary font-bold mt-4">
          Cashflow Tracker
        </h1>

        <AddTransaction />
        <Dashboard />

      </div>
    </div>
  );
}

export default App;