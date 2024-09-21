import { useState } from "react";

export default function UserInput({ userInput, changeInput }) {
  //   const [userInput, setuserInput] = useState({
  //     initialInvest: 10000,
  //     annualInvesment: 1200,
  //     expectReturn: 6,
  //     duration: 10,
  //   });
  //   function hadleChange(typeName, newValue) {
  //     setuserInput((prevUserInput) => {
  //       return {
  //         ...prevUserInput,
  //         [typeName]: newValue,
  //       };
  //     });
  //   }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Invesment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              changeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label> Annual Invesment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              changeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expect Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              changeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label> Initial Invesment</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => changeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
