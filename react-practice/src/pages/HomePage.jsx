import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
 
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <button onClick={() => navigate("/")}>Home Pae</button>
        <button onClick={() => navigate("/gun")}>Gun game</button>
        {/* <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button> */}
      </div>
    </>
  );
}

export default HomePage;
