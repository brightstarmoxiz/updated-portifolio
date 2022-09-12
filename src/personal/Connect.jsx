import { useState } from "react";
const Connect =() => {  
   const [email, setEmail] = useState('');
   const [incorrect, setIncorrect] = useState('');
 
  //  const [, setSumbit] = useState('');

    const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);
  //  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // const handleEmail = (e) => {
  //  setEmail(e.target.value);
  //   setSubmitted(false);
  //   setError(true  );
  // }


  const cool = () => {
    return (
      <div 
        className="success"
        style={{
          display: incorrect?'' : 'none',
        }}>
        <p>please enter a correct email</p> 
      </div>
    ); 
  };
 



   const successMessage = () => {
      return (
        <div 
          className="success"
          style={{
            display: submitted?'' : 'none',
           color:"green"}}>
          <strong> ✔ SUCCESSFULLY REGISTER</strong>
        </div>
      );
    };
   
     
     // Showing error message if error is true
     const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter a correct email</h1>
        </div>
      );
    };
   

    const subscribe = (e) => {
      e.preventDefault()
      
      if (email === ""){
       setIncorrect("pls insert your email")

        return
      }
      
     
      let data = {email}
    console.log(data)
        fetch("http://localhost:7000/register", {

  
          method:"POST",
          headers:{
            "content-Type": "application/json"
          },
          
          body:JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
        //  if (subscribe)  {
        //   setSubmitted(false)
        //  }
        //  else  {
        // setError(true)
        //  }
           console.log(data)
           setSubmitted(data);
           setError(false);
         })
       
    }
    


  
      return (
<>
<div style={{backgroundColor:"deeppink",textAlign:"center", marginTop:"5%",color:"white"}}>
       <strong > Let me help you develop a website </strong>
       <p style={{marginBottom:"0px"}}> I can develop a business, personal & company websites.</p> 
          <b >Am always active</b>
          <p style={{fontSize:"60%"}}>
Get updates
No spam, sales, or ads. Unsubscribe as your heart desires.</p>
     
     
     <form>
       <input className="btn-md" id="email" value={email} style={{marginBottom:"2%",border:"none",padding:"4px",width:"40%"}}
        type="email" placeholder="Input your email" onChange={(e)=> { setEmail(e.target.value)}} required/>
       <button className="btn btn-primary" onClick={ subscribe}> Get update</button>
     {cool()}
       <div className="messages">
       {errorMessage()}
        {successMessage()}
      </div>
      </form>
       </div>
    
      </>
       );

       
  // return (
  //   <div className="app">
      
  //     <div>
  //        <main>

  //         <div className="w-50 mx-auto" style={{backgroundColor:"burlywood", color:"white",textAlign:"center", marginTop:"5%",}}>
  //      <strong >  <b style={{ color:"lawngreen"}}>SUCCESSFUL ✔ THANK YOU </b>for your subscribtion you alway get message when the site is update</strong>
      
      
  //      </div>
  //          </main>
  //     </div>
  //   </div>
  
  //   )
}

export default Connect