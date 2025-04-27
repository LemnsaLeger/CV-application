import { useState } from "react";

function Education({data, setData}) {
  const {schoolName, title, date} = data;
  // const [schoolName, setSchoolName] = useState("");
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  const [isEdit, setIsEdit] = useState(false);

//   toggle edit mode
function editMode(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
}

// function to handle each input field
function handleChange(field, value) {
  if(value !== '') {
    setData({...data, [field]: value});
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
              onChange={(e) => handleChange("schoolName", e.target.value)}
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
              onChange={(e) => handleChange("title", e.target.value)}
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
              onChange={(e) => handleChange("date" ,e.target.value)}
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
