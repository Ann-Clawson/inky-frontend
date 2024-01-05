/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export function Application(props) {
  const [results, setResults] = useState("");
  const [approvedValue, setApprovedValue] = useState("");
  const [tattooers, setTattooers] = useState([]);

  const handleIndexTattooers = () => {
    axios.get("http://localhost:3000/tattooers.json").then((response) => {
      setTattooers(response.data);
    });
  };

  useEffect(handleIndexTattooers, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // function getRandomArbitrary(min, max) {
    //   return Math.floor(Math.random() * (max - min) + min);
    // }
    // const score = getRandomArbitrary(400, 850);

    const score = 400;

    const isApproved = score >= 600;
    setApprovedValue(isApproved ? "true" : "false");

    await new Promise((resolve) => setTimeout(resolve, 0));

    const params = new FormData(event.target);
    props.onCreateApplication(params);
    event.target.reset();

    const amountInput = params.get("amount");
    const amount = parseInt(amountInput.replace(/[^\d]/g, ""), 10);

    const numOfMonths = parseInt(params.get("number_of_months"));

    let interestRate;
    if (score < 700 && numOfMonths === 6) {
      interestRate = 0.1;
    } else if (score < 700 && numOfMonths === 12) {
      interestRate = 0.12;
    } else if (score > 700 && score < 800 && numOfMonths === 0.06) {
      interestRate = 0.08;
    } else if (score > 700 && score < 800 && numOfMonths === 12) {
      interestRate = 0.1;
    } else if (score > 800 && numOfMonths === 6) {
      interestRate = 0.06;
    } else {
      interestRate = 0.08;
    }

    const payment = Math.floor((amount * interestRate + amount) / numOfMonths);

    if (isApproved) {
      setResults(
        <>
          <h2>Approved!</h2>
          <h3>
            Your terms: ${amount}, {numOfMonths} months, {interestRate * 100}% interest rate, monthly payments of $
            {payment}.
          </h3>
          <h4>
            Head on over to your <a href="/userdashboard/">DASHBOARD</a>
          </h4>
        </>
      );
    } else {
      setResults(<h3>Your application requires further review. You will receive a letter from us, one day.</h3>);
    }
  };

  return (
    <div>
      <h1>Financing Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Tattooer:{" "}
          <select id="tattooers-select" name="tattooer_id" required>
            <option value="">Select a tattooer</option>
            {tattooers.map((tattooer) => (
              <option key={tattooer.id} value={tattooer.id}>
                {tattooer.first_name} {tattooer.last_name}, {tattooer.tattoo_shop}
              </option>
            ))}
          </select>
        </div>
        <div>
          Amount: <input name="amount" type="text" required />
        </div>
        <div>
          Number of Months:
          <select id="number-of-months-select" name="number_of_months" required>
            <option value="">Select a term</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          Description: <input name="description" type="text" required />
        </div>
        <div>
          Date of Appointment: <input name="date_of_appt" type="text" required />
        </div>
        <input type="hidden" name="approved" value={approvedValue} />
        <button type="submit">Submit</button>
      </form>
      {results}
    </div>
  );
}
