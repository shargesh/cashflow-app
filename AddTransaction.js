import React, { useState } from "react";
import axios from "axios";

function AddTransaction() {
  const [data, setData] = useState({
    type: "credit",
    amount: "",
    category: ""
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/transactions", data);
    alert("Added!");
  };

  return (
    <div className="mt-4 space-x-2">
      <input placeholder="Amount"
        onChange={e => setData({...data, amount:e.target.value})}
      />

      <input placeholder="Category"
        onChange={e => setData({...data, category:e.target.value})}
      />

      <select onChange={e => setData({...data, type:e.target.value})}>
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>

      <button onClick={submit}>Add</button>
    </div>
  );
}

export default AddTransaction;