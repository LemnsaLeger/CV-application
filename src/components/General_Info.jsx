import { useState } from "react";

function GeneralInfo({data, setData}) {
  const {name, email, phone } = data;
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  //   toggle edit mode
  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

// function to handle all fields
function handleChange(field, value) {
  if(value !== '') {
    setData({...data, [field]: value})
  }
}

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>General Information</h1>
        <label>
          Name
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
          Email
          {!isEdit ? (
            <input
              type="email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          ) : (
            <p>{email}</p>
          )}
        </label>

        <label>
          Phone
          {!isEdit ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          ) : (
            <p>{phone}</p>
          )}
        </label>

        <button onClick={handleEdit}>
          {" "}
          {isEdit ? "Edit General Info" : "Save General Info"}{" "}
        </button>
      </form>
    </>
  );
}

export default GeneralInfo;
