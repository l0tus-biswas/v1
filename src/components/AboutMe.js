import React from "react";

function AboutMe(){
    return(
        <>
        <section className="bg-navyBlue text-white pt-5 about-me">
        
        <div className="container">
            <div className="row ">
                <div className="col-md-5 col-12 text-center my-auto img">
                    <div className="img-in">
                        <img src="https://nairo.ibthemespro.com/img/about/about-me.jpg"
                            className="img-fluid rounded-circle border border-warning border border-4" width="280"
                            height="280" alt="" />
                        <div className="nav social-icons justify-content-center">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                            <i className="fa fa-github" aria-hidden="true"></i>

                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="info ">
                        <h4 className="fs-6 mt-4">Web Developer</h4>
                        <h1 className="fw-bolder">Lotus Biswas</h1>
                    </div>

                </div>
                <div className="col-md-6 col-12 my-auto quote-start-icon">
                    <p className="mb-3">Hii! My name is Lotus and I enjoy creating things that live on the internet.</p>

                    <p className="mb-3"> Fast-forward to today, and I've had the privilege of working at a start-up, and a huge corporation. I am full stack developer who loves to solve real world problems. I have a passion for learning and sharing my knowledge with others as publicly as possible.</p>


                   {/* <div className="row mt-4">
                        <div className="col-md-6 inShort-details">
                            <ul>
                                <li><label>Name: </label><span>Nairobi Gadot</span></li>
                                <li><label>Birthday: </label><span>4th April 1994</span></li>
                                <li><label>Age: </label><span>26 years</span></li>
                                <li><label>Address: </label><span>San Francisco</span></li>
                            </ul>
                        </div>
                        <div className="col-md-6 inShort-details">
                            <ul>
                                <li><label>Phone: </label><span>(+38) 469 2344 2364</span></li>
                                <li><label>Email: </label><span>info@domainname.com</span></li>
                                <li><label>Skype: </label><span>nairob.40</span></li>
                                <li><label>Freelance: </label><span>Available</span></li>
                            </ul>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
        <svg id="wave" style={{transform:"rotate(0deg)", transition:" 0.3s"}} viewBox="0 0 1440 190" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
                    <stop stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path style={{ transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)"
                d="M0,57L30,69.7C60,82,120,108,180,114C240,120,300,108,360,110.8C420,114,480,133,540,139.3C600,146,660,139,720,142.5C780,146,840,158,900,152C960,146,1020,120,1080,101.3C1140,82,1200,70,1260,63.3C1320,57,1380,57,1440,53.8C1500,51,1560,44,1620,47.5C1680,51,1740,63,1800,85.5C1860,108,1920,139,1980,136.2C2040,133,2100,95,2160,69.7C2220,44,2280,32,2340,25.3C2400,19,2460,19,2520,31.7C2580,44,2640,70,2700,76C2760,82,2820,70,2880,53.8C2940,38,3000,19,3060,12.7C3120,6,3180,13,3240,28.5C3300,44,3360,70,3420,95C3480,120,3540,146,3600,148.8C3660,152,3720,133,3780,107.7C3840,82,3900,51,3960,47.5C4020,44,4080,70,4140,76C4200,82,4260,70,4290,63.3L4320,57L4320,190L4290,190C4260,190,4200,190,4140,190C4080,190,4020,190,3960,190C3900,190,3840,190,3780,190C3720,190,3660,190,3600,190C3540,190,3480,190,3420,190C3360,190,3300,190,3240,190C3180,190,3120,190,3060,190C3000,190,2940,190,2880,190C2820,190,2760,190,2700,190C2640,190,2580,190,2520,190C2460,190,2400,190,2340,190C2280,190,2220,190,2160,190C2100,190,2040,190,1980,190C1920,190,1860,190,1800,190C1740,190,1680,190,1620,190C1560,190,1500,190,1440,190C1380,190,1320,190,1260,190C1200,190,1140,190,1080,190C1020,190,960,190,900,190C840,190,780,190,720,190C660,190,600,190,540,190C480,190,420,190,360,190C300,190,240,190,180,190C120,190,60,190,30,190L0,190Z">
            </path>
        </svg>
    </section>
        </>
    );
}

export default AboutMe;