import React from "react";
import "./homepage.css";

import { useState, useEffect } from "react";
import pic1 from "../../../images/20220713-0019cs.jpg";
import { useNavigate } from "react-router-dom";

//stop for a while
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//return a ramdom time between 100ms and
const randomTime = () => {
  return Math.floor(Math.random() * 100 + 100);
};

const Homepage = () => {
  const initialText = "I am a photographer";
  const finalText = "I am a software engineer";
  const job = ["working", "quilt"];
  const [jobState, setJobState] = useState(job[0]);
  const [text, setText] = useState("");
  const textState = ["isTyping", "isDeleting"];
  const [typing, setTyping] = useState(textState[0]);
  const navigate = useNavigate();

  //when click Hire Me button, jump to contact page
  const buttonHandler = (url) => {
    navigate(url, { replace: true });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //page load up
      if (
        text !== initialText &&
        typing === "isTyping" &&
        jobState === "working"
      ) {
        // console.log("1");
        setText(initialText.slice(0, text.length + 1));
        return;
      }
      //when initialText is all displayed, stop for 1.5s, then prepare to deleting
      if (text === initialText && typing === "isTyping") {
        // console.log("2");
        sleep(1500).then(() => {
          setTyping(textState[1]);
          return;
        });
        return;
      }
      //deleting 'photographer'
      if (text.length > 7 && typing === "isDeleting") {
        // console.log(3);
        setText(initialText.slice(0, text.length - 1));
        return;
      }
      //when 'photographer' been deleted, prepare to typing
      if (text.length === 7 && typing === "isDeleting") {
        // console.log(4);
        setTyping(textState[0]);
        setJobState(job[1]);
        return;
      }
      //typing 'softare engineer'
      if (text !== finalText && typing === "isTyping") {
        // console.log(5);
        setText(finalText.slice(0, text.length + 1));
      }
    }, randomTime());
    return () => clearTimeout(timeout);
  }, [text, typing, jobState]);

  return (
    <>
      <div className="homepage">
        <section className="left">
          <h1 className="greetings">Hello there...</h1>
          <h1 className="introduce">My name Li Jiang</h1>
          <div className=" text">{text}</div>
          <button onClick={() => buttonHandler("/gallery")}>MY WORK</button>
          <button onClick={() => buttonHandler("/contact")}>HIRE ME</button>
        </section>
        <section className="right">
          <div className="imageContainer"></div>
          <img alt="Li's pic" src={pic1}></img>
        </section>
      </div>
    </>
  );
};

export default Homepage;
