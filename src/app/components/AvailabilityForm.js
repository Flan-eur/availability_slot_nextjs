"use client";

import { useState, useEffect } from "react";
import TimeSlot from "./TimeSlots";
import styles from "./TimeSlots.module.css";

export default function AvailabilityForm({ userId }) {
  const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [availability, setAvailability] = useState({});
  const [selectedDays, setSelectedDays] = useState([...dates])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/save?key=${userId}`);
        const data = await response.json();
        setAvailability(JSON.parse(data.value) || {});
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    };

    fetchData();
  }, [userId]);

  const toggleDaySelection = (day) => {
    setSelectedDays((prev) => {
      const updatedDays = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
      return dates.filter((d) => updatedDays.includes(d));
    });
  };

  const handleSave = async () => {
    const response = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, availability }),
    });

    if (response.ok) {
      alert("Availability saved!");
    }
  };

  return (
    <div className={styles.place_center}>
      {dates.map((day, index) => (
        <button
          key={day}
          className={`${styles.char_btn} ${selectedDays.includes(day) ? styles.selected : styles.deselected}`}
          onClick={() => toggleDaySelection(day)}
        >
          {day.charAt(0)}
        </button>
      ))}
      {selectedDays.map((day) => (
        <TimeSlot
          key={day}
          day={day}
          availability={availability}
          setAvailability={setAvailability}
        />
      ))}
      <button className={styles.btn} onClick={handleSave}>Save</button>
    </div>
  );
}
