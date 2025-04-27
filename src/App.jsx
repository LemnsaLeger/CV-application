import { useState } from "react";
import "./App.css";

import GeneralInfo from "./components/General_Info.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  const [GeneralInfos, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [Educations, setEducation] = useState({
    schoolName: "",
    title: "",
    date: "",
  });
  const [Experiences, setExperiences] = useState({
    companyRole: "",
    companyName: "",
    responsibilities: [],
    dates: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(!isSubmitted);
  }
  return (
    <>
      {!isSubmitted ? (
        <>
          <GeneralInfo data={GeneralInfos} setData={setGeneralInfo} />
          <Education data={Educations} setData={setEducation} />
          <Experience data={Experiences} setData={setExperiences} />
          <button onClick={handleSubmit}>
            Submit All
          </button>
        </>
      ) : (
        <>
          <h1>CV / Resume</h1>
          <h2>General Information</h2>
          <p>Name: {GeneralInfos.name}</p>
          <p>Email: {GeneralInfos.email}</p>
          <p>Phone: {GeneralInfos.phone}</p>

          <h2>Education</h2>
          <p>School: {Educations.schoolName}</p>
          <p>Title: {Educations.title}</p>
          <p>Date: {Educations.date}</p>

          <h2>Experience</h2>
          <p>Company Name: {Experiences.companyName}</p>
          <p>Role: {Experiences.companyRole}</p>
          <p>Responsibility(s)</p>
          <ul>
            {Experiences.responsibilities.map((resp) => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>

          <p>Dates: </p>
          <ul>
            {Experiences.dates.map((date) => (
              <li key={date}>{date}</li>
            ))}
          </ul>

          <button onClick={handleSubmit}>Edit Cv Info</button>
        </>
      )}
    </>
  );
}

export default App;
