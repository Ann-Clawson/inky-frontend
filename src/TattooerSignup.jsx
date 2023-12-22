import axios from "axios";

export function TattooerSignup() {
  const handleTattooerSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/tattooers.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
      // window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
    });
  };

  return (
    <div id="signup">
      <h1>Tattooers Sign Up</h1>
      <form onSubmit={handleTattooerSubmit}>
        <div>
          First Name: <input name="first_name" type="text" required />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" required />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" required />
        </div>
        <div>
          Tattoo Shop: <input name="tattoo_shop" type="text" required />
        </div>
        <div>
          Email: <input name="email" type="email" required />
        </div>
        <div>
          Password: <input name="password" type="password" required />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
