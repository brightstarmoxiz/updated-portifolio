import './App.css'; 
import React,{ Suspense} from "react";
import { Route, Routes } from "react-router-dom";
const Moses = React.lazy(() => import("./personal/Moses"));
const Project = React.lazy(() => import ("./personal/Project"));
const About = React.lazy(() => import("./personal/About"));
const Contact = React.lazy(() => import("./personal/Contact"));
          


function App() {
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route>
<Route path="/" element={<Moses />} />
<Route path="project" element={<Project />} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
</Route>
  </Routes>
  </Suspense>                                                                                                                                                                             
                                                                                                                              
    </>
  );
}

export default App;
