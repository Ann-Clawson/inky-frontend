export function Home() {
  let financingButton;
  if (localStorage.jwt === undefined) {
    financingButton = (
      <a href="/about">
        <button type="button" className="btn btn-outline-info btn-bnr">
          <i>Apply for Tattoo Financing</i>
        </button>
      </a>
    );
  } else {
    financingButton = (
      <a href="/apply">
        <button type="button" className="btn btn-outline-info btn-bnr">
          <i>Apply for Tattoo Financing</i>
        </button>
      </a>
    );
  }
  return (
    <div className="home" id="home">
      <div className="banner-container">
        <div className="banner">
          <h1>
            <span className="inky">inky</span> is for everyone<span className="copyright"> &copy;</span>
          </h1>
        </div>
        <div>
          <p className="for-everyone">
            Ink should be for everyone. <br />
            With fair and equitable lending practices and fast and secure artist payments, <br />
            <strong>inky</strong> should be for everyone, too.
          </p>
        </div>
        <div>{financingButton}</div>
      </div>
    </div>
  );
}
