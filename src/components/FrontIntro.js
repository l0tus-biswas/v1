import React from 'react'

function FrontIntro() {
  return (
    <div>
        <section class="bg-navyBlue text-white pt-5">
        {/* <!-- <div id='stars'></div>
        <div id='stars2'></div> --> */}
        <div class="container">
            
            <div class="row vh-100 ">
                <div class="col-md-11 col-12 text-center my-auto mx-auto front-intro ">
                    <p class="fs-5" >Hi, my name is </p>
                    <h1>Lotus Biswas <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/slightly-smiling-face_1f642.png" class="img-fluid" width="40px" alt=""/></h1>
                   <div>
                    <h1>I build things for the web. </h1>
                    <p class="fs-5 mt-3">I'm a software engineer who specializes in building exceptional digital experiences.</p>

                    <p class="fs-5 mt-3"><i class="fa fa-map-marker" aria-hidden="true"></i> Dehradun, 🇮🇳 </p>
                    <a href="mailto:lotushotmail111@gmail.com"
                    class="btn btn-outline-warning col-md-2 mt-4 p-2 text-white fw-bold ">Resume</a>
                   
                   </div>
                   
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default FrontIntro;
