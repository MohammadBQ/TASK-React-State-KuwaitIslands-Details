import { useState } from "react";
import islands from "../data/islands";

export default function IslandForm({ island, visitors, setVisitors }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const getFullName = (e) => {
    setFullName(e.target.value);
    console.log(visitors);
  };
  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={getFullName} placeholder="Type Full Name" />
      <input
        onChange={getPhoneNumber}
        type="tel"
        placeholder="Type Phone Number"
      />
      <button
        className="book"
        onClick={() => {
          let islandId = island.id;
          console.log(islandId);
          if (
            window.confirm(
              `Are you sure you want to book to ${island.name} with the Name: ${fullName}, phone: ${phoneNumber}`
            )
          ) {
            islands[islandId - 1].visitors += 1;
            // triggering re-rendering
            setVisitors(visitors + 1);
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}