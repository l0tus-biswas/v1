import React from 'react'

function Contact() {
  return (
    <>
      <section class="bg-deepNavyBlue text-white pb-5">
        <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 190" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(11, 11, 19, 1)" offset="0%"></stop>
                    <stop stopColor="rgba(11, 11, 19, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)"
                d="M0,171L30,167.8C60,165,120,158,180,148.8C240,139,300,127,360,126.7C420,127,480,139,540,139.3C600,139,660,127,720,117.2C780,108,840,101,900,107.7C960,114,1020,133,1080,129.8C1140,127,1200,101,1260,88.7C1320,76,1380,76,1440,63.3C1500,51,1560,25,1620,28.5C1680,32,1740,63,1800,63.3C1860,63,1920,32,1980,38C2040,44,2100,89,2160,88.7C2220,89,2280,44,2340,41.2C2400,38,2460,76,2520,91.8C2580,108,2640,101,2700,95C2760,89,2820,82,2880,91.8C2940,101,3000,127,3060,117.2C3120,108,3180,63,3240,50.7C3300,38,3360,57,3420,79.2C3480,101,3540,127,3600,136.2C3660,146,3720,139,3780,129.8C3840,120,3900,108,3960,85.5C4020,63,4080,32,4140,25.3C4200,19,4260,38,4290,47.5L4320,57L4320,190L4290,190C4260,190,4200,190,4140,190C4080,190,4020,190,3960,190C3900,190,3840,190,3780,190C3720,190,3660,190,3600,190C3540,190,3480,190,3420,190C3360,190,3300,190,3240,190C3180,190,3120,190,3060,190C3000,190,2940,190,2880,190C2820,190,2760,190,2700,190C2640,190,2580,190,2520,190C2460,190,2400,190,2340,190C2280,190,2220,190,2160,190C2100,190,2040,190,1980,190C1920,190,1860,190,1800,190C1740,190,1680,190,1620,190C1560,190,1500,190,1440,190C1380,190,1320,190,1260,190C1200,190,1140,190,1080,190C1020,190,960,190,900,190C840,190,780,190,720,190C660,190,600,190,540,190C480,190,420,190,360,190C300,190,240,190,180,190C120,190,60,190,30,190L0,190Z">
            </path>
        </svg>
        <div class="container">
            <div class="row text-center vh-40 ">
                <div class="col-md-7 col-12 my-auto mx-auto " >
                    <div class="mb-4 quote-start-icon-footer">
                        <h1 class="fs-5">What’s Next?</h1>
                        <h1 class="fw-bolder">Get In Touch</h1>
                    </div>
                    <div></div>
                        <p class="lh-base">Although I'm not currently looking for any new opportunities, my inbox is
                            always open. Whether you have a question or just want to say hi, I'll try my best to get
                            back to you!</p>
                        <a href="mailto:lotushotmail111@gmail.com"
                            class="btn btn-warning col-md-3 mt-4 p-2 text-white fw-bold"> Say
                            Hello</a>
                    </div>

                </div>
            </div>
    </section>
    </>
  )
}

export default Contact