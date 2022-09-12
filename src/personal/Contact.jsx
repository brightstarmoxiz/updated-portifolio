import Connect from "./Connect"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Contact =()=>{
    return(
        <>
        <Navbar/>
        <h1 style={{textAlign:"center",marginTop:"3%",fontFamily:"verdana",color:"darkblue"}}> My Contact </h1>
        
        <div class="card  mx-auto mt-5" style={{width:"53%",border:"none",fontSize:"130%",fontFamily:"verdana",backgroundColor:"fuchsia",color:"darkblue"}} >
        <p >Thanks for your interest in getting in touch!</p>

        <strong>The best way to reach me is by email  <a href="f">hi @ jojololamoses@gmail.com.</a></strong>
  <div class="card-body">
    {/* <h5 class="card-title">The best way to reach me is by email at hi@monicalent.com.</h5> */}
    <p class="card-text">NOTE: I do NOT accept guest posts or do link insertions. Paid or otherwise. Ask me for one of those things and I will mark your email as spam 😇</p>
  
  
  </div>
  <p >If you’ve got a more casual question, the best place to get in touch is on Twitter <a href="https://www.twitter.com/brightstar4407">@brightstar</a></p>
  </div>
<Connect/>
       <Footer/>
        </>
    )
}

export default Contact