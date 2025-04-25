import { useState } from "react";

function Experience() {
  const [name, setName] = useState("");
  const [companyRole, setRole] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [currentResponsibilty, setCurrentResponsibility] = useState("");
  const [dates, setDates] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const [isEdit, setIsEdit] = useState(false); // for re-rendering

  function handleRole(value) {
    if(value !== ''){
        setRole(value);
    }
  }

  function handleName(value) {
    if(value !== ''){
        setName(value);
    }
  }

  function handleCurrentResponsibilty(value) {
    if(value !== '') {
        setCurrentResponsibility(value);
    }
  }

  function addResponsibility(e) {
    e.preventDefault();
    if (currentResponsibilty.trim() !== "") {
      setResponsibilities([...responsibilities, currentResponsibilty]);
      setCurrentResponsibility("");
    }
  }

  function handleCurrentDate(value) {
    if(value !== '') {
        setCurrentDate(value);
    }
  }

  function addDate(e) {
    e.preventDefault();
    if (currentDate.trim() !== "") {
      setDates([...dates, currentDate]);
      setCurrentDate("");
    }
  }
// switch modes
  function toggleEditMode(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
    if(isEdit) {
        setDates([]);
        setResponsibilities([]);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Experience</h1>

      <label>
        Company
        {!isEdit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => handleName(e.target.value)}
          />
        ) : (
          <p>{name}</p>
        )}
      </label>

      <label>
        Company Role
        {!isEdit ? (
          <input
            type="text"
            value={companyRole}
            onChange={(e) => handleRole(e.target.value)}
          />
        ) : (
          <p>{companyRole}</p>
        )}
      </label>

      <label>
        Responsibilities
        {!isEdit && (
          <>
            <input
              type="text"
              value={currentResponsibilty}
              onChange={(e) => handleCurrentResponsibilty(e.target.value)}
            />
            <button onClick={addResponsibility}>Add</button>
          </>
        )}
        <ul>
          {responsibilities.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
      </label>

      <label>
        Dates
        {!isEdit && (
          <>
            <input
              type="date"
              value={currentDate}
              onChange={(e) => handleCurrentDate(e.target.value)}
            />
            <button onClick={addDate}>Add</button>
          </>
        )}
        <ul>
          {dates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
      </label>

      <button onClick={toggleEditMode}>
        {isEdit ? "Edit Experience Info" : "Save Experience Info"}
      </button>
    </form>
  );
}

export default Experience;
