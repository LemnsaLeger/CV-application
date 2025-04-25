import { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  //   toggle edit mode
  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  function handleName(value) {
    if (value !== "") {
      setName(value);
    }
  }

  function handleEmail(value) {
    if (value !== "") {
      setEmail(value);
    }
  }

  function handlePhone(value) {
    if (value !== "") {
      setPhone(value);
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
              onChange={(e) => handleName(e.target.value)}
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
              onChange={(e) => handleEmail(e.target.value)}
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
              onChange={(e) => handlePhone(e.target.value)}
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
