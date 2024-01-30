export function Home() {
  return (
    <div className="home" id="home">
      <div className="banner-container">
        <div className="banner">
          <h1>
            <span className="inky">ink(y)</span> is for everyone<span> &copy;</span>
          </h1>
        </div>
        <div className="">
          <p className="for-everyone">
            Ink should be for everyone. <br />
            And, with fair and equitable lending practices and fast and secure payments, <br />
            <strong>ink(y)</strong> is for everyone, too.
          </p>
        </div>
        <button type="button" className="btn btn-outline-info">
          Apply for Tattoo Financing
        </button>
      </div>
    </div>
  );
}
