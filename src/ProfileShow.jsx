/* eslint-disable react/prop-types */
export function ProfileShow(props) {
  const handleUserUpdateSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params);
    event.target.reset();
  };
  return (
    <div className="login-modal">
      <h1 onClick={props.onClose}>{props.user.first_name}</h1>
      <form onSubmit={handleUserUpdateSubmit}>
        <div>
          First Name: <input name="first_name" type="text" defaultValue={props.user.first_name} />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" defaultValue={props.user.last_name} />
        </div>
        <div>
          Address: <input name="address" type="text" defaultValue={props.user.address} />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" defaultValue={props.user.phone_number} />
        </div>
        <div>
          Email: <input name="email" type="email" defaultValue={props.user.email} />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="btn btn-outline-info btn-bnr login">
          Save Changes
        </button>
      </form>
    </div>
  );
}
