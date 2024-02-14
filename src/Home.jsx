export function Home() {
  return (
    <div className="home" id="home">
      <div className="banner-container">
        <div className="banner">
          <h1>
            <span className="inky">inky</span> is for everyone<span> &copy;</span>
          </h1>
        </div>
        <div className="">
          <p className="for-everyone">
            Ink should be for everyone. <br />
            With fair and equitable lending practices and fast and secure artist payments, <br />
            <strong>inky</strong> is for everyone, too.
          </p>
        </div>
        <button type="button" className="btn btn-outline-info btn-bnr">
          <i>Apply for Tattoo Financing</i>
        </button>
      </div>
    </div>
  );
}
