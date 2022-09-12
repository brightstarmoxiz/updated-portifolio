import Connect from "./Connect"
import Footer from "./Footer"
import Navbar from "./Navbar"
import pro from "./project2.JPG"
import pro2 from "./project3.JPG"
import pro3 from "./project4.JPG"

const Project =()=>{
     
    return(
        <>
        <Navbar/>
        <div class="container " style={{width:"88%"}}>

           
            <div >
            <h1 className="mt-5" style={{fontSize:"55px",marginLeft:"15%"}}>Project</h1>
            <a href ="https://brightstarmoxiz.github.io/coolbrightstar/game%20creator.html" style={{textDecoration:"none"}}><b style={{marginLeft:"15%"}}>SNAKE GAME :</b></a>
            <p style={{marginLeft:"15%"}}> <b> SNAKE GAME</b> is the first project i did when am learning javascript. This give me courage to never give in learning javascript</p>
            <a href ="https://brightstarmoxiz.github.io/coolbrightstar/game%20creator.html" style={{textDecoration:"none"}}> <img style={{width:"100%", marginTop:"2%"}} src={pro} alt="snake game" /></a>

 <div style={{marginTop:"4%"}}>
 <a   href ="https://brightstarmoxiz.github.io/" style={{textDecoration:"none"}} ><b style={{marginLeft:"15%"}}>COOL MONEY:</b></a>
 <p style={{marginLeft:"15%"}}>
 <b>COOL MONEY</b> is a banking app that you can able to transfer, withdraw, do payment transaction,save money and borrow loan.
 </p>
 <p style={{marginLeft:"15%"}}>Although, am yet to finish the project, it remain the dashboard </p>
 </div>
 <img style={{width:"100%", marginTop:"2%"}} src={pro2} alt="banking site" />
 <p style={{marginTop:"2%", fontSize:"150%"}}><b>Here is cool money dashboard, am almost done with it </b></p>
 <img style={{width:"100%", marginTop:"1%"}} src={pro3} alt="this is cool money dashboard" />
 </div>
 
 </div>
          
   <Connect/>
       <Footer/>
        </>
    )
}
export default Project