import React, { useRef, useState } from "react";
import Gun from "../components/Gun";

function DebounceGun() {
  const audioRef = useRef(null);
  const [isNormalGunFIres, setIsNormalGunFIres] = useState(false);
  const [isDebounceGunFired, setIsDebounceGunFired] = useState(false);
  const [isThrottledGunFired, setIsThrottledGunFired] = useState(false);
  function onNormalType() {
    setIsNormalGunFIres(true);
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsNormalGunFIres(false);
    }, 1000);
  }
  function onDebounceType() {
    setIsDebounceGunFired(true);
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsDebounceGunFired(false);
    }, 1000);
  }
  function onThrottledType() {
    setIsThrottledGunFired(true);
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsThrottledGunFired(false);
    }, 1000);
  }

  // debounce
  let timer = null;
  const debounceClick = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      onDebounceType();
    }, 1000);
  };

  // throttling
  let lastCall = 0;
  const throttleClick = () => {
    const now = Date.now();
    if (now - lastCall > 1000) {
      onThrottledType();
      lastCall = now;
    }
  };

  return (
    <>
      <div>
        <p>Click on gun to fire</p>
        Read about :{" "}
        <a
          href="https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1"
          target="_blank"
        >
          Debounce{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://www.freecodecamp.org/news/throttling-in-javascript/"
          target="_blank"
        >
          Throttling{" "}
        </a>
      </div>
      <hr />
      <audio ref={audioRef} controls autoPlay className="audio-controls">
        <source src="/gunSound.mp3" type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>

      <div className="gun-container">
        Normal Gun ( fires on each click) <Gun onClick={onNormalType} isFired={isNormalGunFIres} />
        Debounce Gun{" "} ( fires if delay b/w two clicks is 1 sec)
        <Gun onClick={debounceClick} isFired={isDebounceGunFired} />
        Throttle Gun{" "} ( fires after some milisec if you keep clicking)
        <Gun onClick={throttleClick} isFired={isThrottledGunFired} />
      </div>
    </>
  );
}

export default DebounceGun;
