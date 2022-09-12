   import { Link } from "react-router-dom"
  
  const Navbar = () => {

    return(
        <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:"darkblue"}}>
        <div class="container">
          <Link to={"/"}class="navbar-brand active" href="#"><strong style={{fontFamily:"verdana"}}>Moses Jojolola</strong></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to ={"/project"} class="nav-link nav-item "><span style={{fontFamily:"verdana"}}>Project </span></Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"} class="nav-link"> <span style={{fontFamily:"verdana"}}>About me</span></Link>
              </li>
              <li class="nav-item">
                <Link to={"/contact"} class="nav-link" href="#" ><span style={{fontFamily:"verdana"}}> Contact me</span></Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    )
}

export default Navbar