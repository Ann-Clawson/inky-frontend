export function Home(props) {
  return (
    <>
      <div className="container" id="home">
        <h1>ink(y) is for everyone</h1>
        <a onClick={() => props.onSignupShow()}>Sign Up</a>
      </div>
    </>
  );
}
