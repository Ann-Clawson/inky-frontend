import { useState } from "react";

export function Application(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateApplication(params);
    event.target.reset();
    // window.location.href = "/applications";
  };

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Financing Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Tattooer:{" "}
          <input
            name="tattooer_id"
            type="text"
            required
            list="tattooers"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
          />
          <datalist id="tattooers">
            {searchFilter === "" ? (
              <option></option>
            ) : (
              props.tattooers.map((tattooer) => <option key={tattooer.id}>{tattooer.first_name}</option>)
            )}
          </datalist>
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
    </div>
  );
}
