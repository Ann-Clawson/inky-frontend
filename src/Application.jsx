/* eslint-disable react/prop-types */
import { useState } from "react";

export function Application(props) {
  const [results, setResults] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateApplication(params);
    event.target.reset();
    // window.location.href = "/apply";

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let score = getRandomArbitrary(600, 850);
    if (score < 700) {
      setResults(
        <>
          <h3>less than 700</h3>
        </>
      );
    } else {
      setResults(<h3>greater than 700</h3>);
    }
  };

  return (
    <div>
      <h1>Financing Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Tattooer:{" "}
          <select id="tattooers-select" name="tattooer_id">
            <option value="">Select a tattooer</option>
            {props.tattooers.map((tattooer) => (
              <option key={tattooer.id} value={tattooer.id}>
                {tattooer.first_name} {tattooer.last_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          Amount: <input name="amount" type="text" required />
        </div>
        <div>
          Number of Months: <input name="number_of_months" type="text" required />
        </div>
        <div>
          Description: <input name="description" type="text" required />
        </div>
        <div>
          Date of Appointment: <input name="date_of_appt" type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {results}
    </div>
  );
}
