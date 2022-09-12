import { Link } from "react-router-dom"

const Footer =()=>{

    return (
<footer style={{backgroundColor:"darkblue",height:"110px", color:"white",overflowY:"auto"}}>
    <div style={{display:"flex", justifyContent:"space-around",marginLeft:"10%"}}>
        <div style={{width:"20%"}}>
<Link to={"/"} style={{textDecoration:"none", color:"white"}} ><p style={{paddingTop:"50px"}}>&copy; Moses Jojolola website 2022</p></Link>
</div>
 <div class="container" style={{paddingTop:"50px", width:"30%",listStyleType: "none",fontSize:"14px"}}>
  <a href = {"https://www.twitter.com/brightstar4407"} style={{textDecoration:"none",color:"white"}}><span>Twitter </span></a>
  <a href = {"https://www.facebook.com/brightgold.moxiz"} style={{textDecoration:"none",color:"white"}}><span> . Facebook </span> </a> 
  <a href = {"https://www.github.com/brightstarmoxiz"} style={{textDecoration:"none",color:"white"}}><span> . Github </span></a> 
  <a href = {"https://www.linkedin.com/in/brightstar-moxiz-408596220/"} style={{textDecoration:"none",color:"white"}}><span> . Linkedin </span></a> 

</div>
 </div>
</footer>
    )
}

export default Footer