import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <>
      <div>
        <div>
          <h1>Unlock your potential with the best language tutors</h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link to="/teachers">Get started</Link>
        </div>
        {/* <img src="" alt="" /> */}
      </div>
      <div></div>
    </>
  );
}
