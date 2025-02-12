import styles from "./TimeSlots.module.css";

export default function TimeSlot({ day, availability, setAvailability }) {

  const addSlot = () => {
    setAvailability((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), { start: "", end: "" }],
    }));
  };

  const removeSlot = () => {
    setAvailability((prev) => {
      const newSlots = [...(prev[day] || [])];
      newSlots.splice(newSlots.length - 1, 1);
      return { ...prev, [day]: newSlots.length ? newSlots : [{ start: "", end: "" }] };
    });
  };

  const updateSlot = (index, field, value) => {
    setAvailability((prev) => {
      const newSlots = [...(prev[day] || [])];

      if (field === "end" && newSlots[index].start) {
        const startTime = newSlots[index].start;
        if (value < startTime) {
          alert("End time cannot be earlier than start time!");
          return prev;
        }
      }

      newSlots[index][field] = value;
      return { ...prev, [day]: newSlots };
    });
  };

  return (
    <div className={styles.row_container}>
      <div className={styles.label}>
        <h3>{day}</h3>
      </div>
      <div className={styles.time_list}>
        {availability[day]?.map((slot, index) => (
          <div className={styles.time_wrapper} key={index}>
            <input
              type="time"
              className={styles.time_input}
              value={slot.start}
              onChange={(e) => updateSlot(index, "start", e.target.value)}
            />
            <span>to</span>
            <input
              type="time"
              className={styles.time_input}
              value={slot.end}
              onChange={(e) => updateSlot(index, "end", e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className={styles.options}>
        <button className={styles.add_slot} onClick={addSlot}>+</button>
        {availability[day] && (
          <button className={styles.remove_slot} onClick={removeSlot}>−</button>
        )}
      </div>
    </div>
  );
}
