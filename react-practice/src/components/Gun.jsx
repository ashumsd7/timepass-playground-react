import React from "react";

function Gun({ onClick,isFired=false }) {


  return (
    <>

      <div
        onClick={() => {
          onClick();
        }}
      >
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                width: "150px",
                background: "black",
                borderRadius: "20px",
                height: "20px",
              }}
            ></div>
            <div
              style={{
                width: "110px",
                background: "black",
                borderRadius: "6px",
                height: "10px",
                marginLeft: "10px",
              }}
            ></div>
            { isFired && [1, 2, 3].map((item) => {
              return (
                <div
                  style={{
                    position: "absolute",
                    right: item * -10 + 'px',
                    top: "-5px",
                    transform: "rotate(60deg)",
                  }}
                >
                  🔥
                </div>
              );
            })}
            <div
              style={{
                width: "50px",
                background: "black",
                borderRadius: "20px",
                height: "20px",
                transform: "rotate(95deg)",
                marginTop: "-10px",
                marginLeft: "-10px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Gun;
