/* eslint-disable react/prop-types */
export function TattooerUpdate(props) {
  const handleTattooerUpdateSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(props.tattooer.id, params);
    event.target.reset();
  };

  return (
    <div id="signup">
      <h1>Tattooers Update</h1>
      <h4>Update your profile => {props.tattooer.name}</h4>
      <form onSubmit={handleTattooerUpdateSubmit}>
        <div>
          First Name: <input name="first_name" type="text" defaultValue={props.tattooer.first_name} />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" defaultValue={props.tattooer.last_name} />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" defaultValue={props.tattooer.phone_number} />
        </div>
        <div>
          Tattoo Shop: <input name="tattoo_Shop" type="text" defaultValue={props.tattooer.tattoo_shop} />
        </div>
        <div>
          Email: <input name="email" type="email" defaultValue={props.tattooer.email} />
        </div>
        <div>
          Password: <input name="password" type="password" defaultValue={props.tattooer.password} />
        </div>
        <div>
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" defaultValue={props.tattooer.password_confirmation} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
