import Connect from "./Connect"
import Footer from "./Footer"
import Navbar from "./Navbar"
import star from "./star.jpg"
// import { Link } from "react-router-dom"

const About =() =>{
    return(
        <>
        <Navbar/>

        <h2 style={{textAlign:"center", marginTop:"2%",color:"darkblue"}}>About</h2>
        <div class="container mt-3" >
  <div class="row align-items-start" style={{color:"darkblue"}} >
    <div class="col-sm-6 " style={{fontFamily:"verdana",backgroundColor:"fuchsia"}}>
   <p> Hi, my name is moses Jojolola. I'm a Nigerian Software Engineer.  I live in Ibadan,Oyo state. I'm a computer science student, study at The polytechnic, Ibadan.</p>
   <p> 
       With two year experience in full-stack web development and graphic design, i am confident i will be an excellent fit for any company as a software developer. my experience has provided
       me with the innovative and technical skills neccessary to successsfully provide your company with multifaceted technical solutions across a wide range software plateforms.
   </p>

<p>I am responsible for leading the development for three high-traffic ecommerce websites that offer 12 million monthly users customizable documents. i oversee the building of innovative 
    system HTML5,CSS4/SASS,JavaScript/React,MySQL and ElasticSearch. i was instrumental in structuring several internal systems comprising order entry/management tools, conversion/renue reporting
    and production workflow tracking, as well a designed custom REST APIs built in NodeJS. i also successsfully collabraten on solutions with our product, and marketing teams to offer the best user 
    experience to build higher customer lifetime value. </p>


<p>It would be a pleasure to learn more about company's needs, and i would welcome the chance to provide further insight into my knowledge of project mangement, technical abilities, personal attributes, and 
    track record of success in building renue generating web technologies compatible across mutiple plateforms, browsers, and devices.
</p>
<p>Thank you for considering my candidacy for this position. i hope to hear from you soon to schedule an interview.</p>
    </div>
    <div class=" col-sm-6">
    <img style={{width:"400px",height:"600px"}} src={star} alt="moses pix" />
    </div>
    </div>
    </div>

    <Connect/>
       <Footer/>
        </>
    )
}

export default About