import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(res => setData(res.data));
  }, []);

  let balance = 0;

  data.forEach(tx => {
    balance += tx.type === "credit" ? tx.amount : -tx.amount;
  });

  return (
    <div className="mt-4">
      <h2 className="text-xl">Balance: ₹{balance}</h2>
    </div>
  );
}

export default Dashboard;