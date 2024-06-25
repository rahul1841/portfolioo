import React, { useRef, useState } from "react";

const Terminal = ({ dev, setDev }) => {
  const [inputHistory, setInputHistory] = useState([]);
  const [outputHistory, setOutputHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newInputHistory = [...inputHistory, currentInput];
      setInputHistory(newInputHistory);

      const output = processInput(currentInput);
      if (output == "") {
        setOutputHistory([]);
      } else {
        const newOutputHistory = [...outputHistory, output];
        setOutputHistory(newOutputHistory);
      }

      setCurrentInput("");
    }
  };

  const processInput = (command) => {
    let newOutput = "";
    // Simulate processing of commands
    command = command.replaceAll(" ", "");
    if (command === "help") {
      newOutput =
        " aboutme : Shows my introduction \n projects : Shows my projects \n resume : Shows my Resume \n links : Shows my profile links \n email : Shows my email \n clear : Clears the terminal";
    } else if (command.startsWith("hello")) {
      newOutput = command.slice(5);
    } else if (command === "aboutme") {
      newOutput =
        "Hello I am Rahul Kumar. I am a B.Tech Student currently studying in G.L. Bajaj Institute of Technology, Greater Noida.";
    } else if (command === "projects") {
      newOutput =
        "WebMine : A Platform to scrape and analyze customer review on products. \nEduGlow : EduGlow is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. \nExpense Tracker :  A Expense Tracker application using Context Api. \nAviScan : A Hackathon project for categorizing faults in Aeroplanes.";
    } else if (command === "resume") {
      newOutput = "File Opened in new Tab";
      window.open("/resume.pdf", "_blank");
    } else if (command === "links") {
      newOutput =
        "Twitter: https://x.com/KumarRahul3748 \nGithub : https://github.com/rahul1841 \nLeetCode : https://leetcode.com/u/rahul2004kumar14/ \nLinkedIn : https://www.linkedin.com/in/rahul-kumar-716045207/";
    } else if (command === "clear") {
      newOutput = "";
    } else if (command === "email") {
      newOutput = "rahul2004kumar14@gmail.com";
    } else if (command === "normal") {
      newOutput = "Switched to normal mode";
      setDev(false);
    } else {
      newOutput = `Command not found: ${command}`;
    }
    return newOutput;
  };
  return (
    <>
      {dev ? (
        <div className="p-5  font-mono">
          <div className="text-greylight-500">
            <div>Welcome to my terminal [Version 1.0.0.1]</div>
            <div>Type normal to switch back to normal mode.</div>
            <div>Get started by typing `help` command</div>
          </div>
          <div className=" font-mono text-lg">
            {outputHistory.map((output, index) => (
              <div key={index}>
                <div className="text-green-100">{"$ rahulkumar.me >>"}</div>
                {/* <br /> */}
                <pre className="text-greylight-500">{output}</pre>
              </div>
            ))}
          </div>
          <div>
            <div className="w-full text-lg text-green-100">
              $ rahulkumar.me {">>"}
              <input
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                className="bg-greylight-50 border-none outline-none w-[80vw]"
              />
              <br />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Terminal;
