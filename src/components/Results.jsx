import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  // const initialInvest =
  //   resultData[0].valueEndOfYear -
  //   resultData[0].interest -
  //   resultData[0].annualInvestment;
  // console.log(initialInvest);
  const initialInvest = input.initialInvestment;
  console.log(initialInvest);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            initialInvest -
            yearData.year * yearData.annualInvestment;
          const totalAmountInvested =
            initialInvest + yearData.year * yearData.annualInvestment;
          //const totalInterest = yearData.valueEndOfYear - totalAmountInvested;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year} </td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
