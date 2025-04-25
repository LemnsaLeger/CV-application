import { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [isEdit, setIsEdit] = useState(false);

//   toggle edit mode
function editMode(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
}

  function handleSchoolName(value) {
    if(value !== ''){
        setSchoolName(value);
    }
  }

  function handleTitle(value) {
   if(value !== ''){
     setTitle(value);
   }
  }

  function handleDate(value) {
    if(value !== ''){
        setDate(value);
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Education</h1>
        <label>
          School Name
          {!isEdit ? (
            <input
              type="text"
              value={schoolName}
              onChange={(e) => handleSchoolName(e.target.value)}
            />
          ) : (
            <p>{schoolName}</p>
          )}
        </label>

        <label>
          Title of Study
          {!isEdit ? (
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitle(e.target.value)}
            />
          ) : (
            <p>{title}</p>
          )}
        </label>

        <label>
          Date
          {!isEdit ? (
            <input
              type="date"
              value={date}
              onChange={(e) => handleDate(e.target.value)}
            />
          ) : (
            <p>{date}</p>
          )}
        </label>

        <button onClick={editMode}>{isEdit ? 'Edit Education Info' : 'Save Education Info'}</button>
      </form>
    </>
  );
}

export default Education;
