import React from 'react'

function FrontIntro() {
  return (
    <div>
        <section className="bg-navyBlue text-white pt-5">
         <div id='stars'></div>
        <div id='stars2'></div> 
       
        <div className="container">
            
            <div className="row vh-100 ">
                <div className="col-md-11 col-12 text-center my-auto mx-auto front-intro ">
                    <p className="fs-5" >Hi, my name is </p>
                    <h1>Lotus Biswas <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/slightly-smiling-face_1f642.png" className="img-fluid" width="40px" alt=""/></h1>
                   <div>
                    <h1>I build things for the web. </h1>
                    <p className="fs-5 mt-3">I like making fun, interactive things with code.</p>

                    <p className="fs-5 mt-3"><i className="fa fa-map-marker" aria-hidden="true"></i> Dehradun, 🇮🇳 </p>
                    <a href="mailto:lotushotmail111@gmail.com"
                    className="btn btn-outline-warning col-md-2 mt-4 p-2 text-white fw-bold ">Resume</a>
                   
                   </div>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default FrontIntro;
