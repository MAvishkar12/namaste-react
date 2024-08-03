import { LOGO_cdn } from "../utils/constant";
const Heading = () => {
    return (
      <div className="header">
        <div className="logo-container"> 
          <img className="logo" src={LOGO_cdn}/>
          
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cards</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Heading;