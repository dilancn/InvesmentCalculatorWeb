import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInputs, setuserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInputs.duration > 0;
  function hadleChange(typeName, newValue) {
    setuserInputs((prevUserInput) => {
      return {
        ...prevUserInput,
        [typeName]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInputs} changeInput={hadleChange} />
      {inputIsValid ? (
        <Results input={userInputs} />
      ) : (
        <p className="center"> Please enter a duration greater than zero </p>
      )}
    </>
  );
}

export default App;
