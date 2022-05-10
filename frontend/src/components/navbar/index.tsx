import {ReactComponent as GitHubIcon} from 'assets/Vector.svg';
import './style.css';
function Navbar(){

    return(
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a id="ajuste" href="https://github.com/VitorHenri/DsMovie" target="_blank">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon></GitHubIcon>
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
            </div>
        </nav>
    </header>
  
    );
    
}
export default Navbar;