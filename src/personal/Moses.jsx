import dev1 from "./developerpix1.jpg"
import dev2 from "./developerpix2.jpg"
import dev3 from "./developerpix3.jpg"
import dev4 from "./developerpix4.png"
import Footer from "./Footer"
import star from "./Onlystar.jpg"
import Navbar from "./Navbar"
import Connect from "./Connect"

const Moses = ()=>{

    return(
        <>
        <Navbar/>
        <div style={{padding:"30px", backgroundColor:"darkblue"}}>
      <div className="pix" style={{height:"180px",padding:"10px", width:"180px", margin:"auto",borderRadius:"50%",marginBottom:"2%",}}>
        <img style={{height:"190px", width:"190px",borderRadius:"50%"}} src={star} alt=" my profile pics" />
      </div>

      <div  style={{ color:"white", textAlign:"center"}}>
      <span style={{fontSize:"400%",fontWeight:"bolder",fontFamily:"verdana"}}>Hi, I'm Moses</span>
      <p  style={{fontSize:"200%",fontFamily:"verdana"}}>I am a software engineer</p>
      <p  style={{fontSize:"100%",fontFamily:"verdana"}}>
          I develop websites, both the front-end and backend, i work very prefect because i believe in hardworking
      </p>
      </div>
      </div>
      <div class="container mt-3" style={{backgroundColor:"fuchsia"}}>
  <div class="row align-items-start">
    <div class="col-sm-6 ">
      <img style={{width:"94%"}} src={dev1} alt="this a devloper pix" />
    </div>
    <div class=" col-sm-6">
    <img style={{width:"103%"}} src={dev2} alt="this a devloper site" />
    </div>
    
  </div>
  <div class="row align-items-center mt-3">
    <div class="col-sm-6">
    <img style={{width:"94%"}} src={dev3} alt="this a devloper pic" />
    </div>
    <div class="col-sm-6">
    <img style={{width:"102%"}} src={dev4} alt="this a devloper pic" />
    </div>
    
  </div>
</div>
<Connect/>
       <Footer/>
        </>
    )
}

export default Moses