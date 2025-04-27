import { useState } from "react";

function Experience({data, setData}) {
  const { name, companyRole, dates, responsibilities } = data;
//   const [name, setName] = useState("");
//   const [companyRole, setRole] = useState("");
//   const [responsibilities, setResponsibilities] = useState([]);
  const [currentResponsibilty, setCurrentResponsibility] = useState("");
//   const [dates, setDates] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const [isEdit, setIsEdit] = useState(false); // for re-rendering

    function handleChange(field, value) {
        if(value !== '') {
            setData({...data, [field]: value});
        }
    }
 

  function addResponsibility(e) {
    e.preventDefault();
    if (currentResponsibilty.trim() !== "") {
      setData({...data, responsibilities:[...responsibilities, currentResponsibilty]});
      setCurrentResponsibility("");
    }
  }

  function addDate(e) {
    e.preventDefault();
    if (currentDate.trim() !== "") {
      setData({...data, dates:[...dates, currentDate]});
      setCurrentDate("");
    }
  }
// switch modes
  function toggleEditMode(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
   if(isEdit) {
     dates.forEach((d, index) => dates.splice(index, 1)); // remove all the dates
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
            onChange={(e) => handleChange("name", e.target.value)}
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
            onChange={(e) => handleChange("companyRole", e.target.value)}
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
              onChange={(e) => setCurrentResponsibility(e.target.value)}
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
              onChange={(e) => setCurrentDate(e.target.value)}
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
