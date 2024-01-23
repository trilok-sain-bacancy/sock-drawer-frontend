import logo from '../assets/images/logo.svg';
import mail from '../assets/images/email.svg';
const  Header = ( ) => {
      return (
  
        <nav className="navbar navbar-expand-lg navbar_main navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#"> 
              <img src={logo} className="me-2" alt="logo" />Granite Coin
            </a>
            <div className='d-flex justify-content-between align-items-center' style={{ width: 150 }}>
              <span className='header-item float-start'>Bal : 0.0</span>
              <span>
                <a href='mailto:someone@example.com'><img src={mail} alt="mail" height={40} width={40}/></a>
              </span>
            </div>
          </div>
        </nav>
      );
    }


    export default Header;