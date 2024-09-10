import React, { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import CsvDataComponent from "./CsvDataComponent";

function TestPage() {
  const [url, setUrl] = useState("https://dummyjson.com/todos");

  // const data = useQuery(ursl);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUrl("https://jsonplaceholder.typicode.com/todos/");
  //   }, 5000);
  // }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log("{ x: event.clientX, y: event.clientY }", {
        x: event.clientX,
        y: event.clientY,
      });
      const cir = document.querySelector(".circle");
      console.log("cir", cir, event?.clientX);
      setTimeout(() => {
        cir.style.left = event.clientX  + "px";
        cir.style.top = event.clientY  + "px";
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="area">
      TestPage :<span className="circle"></span>ss
      <CsvDataComponent/>
    </div>
  );
}

export default TestPage;
