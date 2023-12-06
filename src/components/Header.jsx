import logo from '../assets/images/logo.svg'
const  Header = ( ) => {
      return (
  
        <nav className="navbar navbar-expand-lg navbar_main navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#"> 
              <img src={logo} className="me-2" alt="logo" />Granite Coin
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">How it works</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Market</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">News</a> </li>
              </ul>
              <form className="d-flex">
                <button className="btn" type="submit">Connect</button>
              </form>
            </div>
          </div>
        </nav>
      );
    }


    export default Header;