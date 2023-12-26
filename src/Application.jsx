export function Application(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateApplication(params);
    event.target.reset();
    // window.location.href = "/applications";
  };
  return (
    <div>
      <h1>Financing Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Tattooer ID: <input name="tattooer_id" type="text" required />
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
