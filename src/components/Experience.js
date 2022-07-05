import React from 'react'

function Experience() {
    return (
        <>
            <section className="bg-deepDark text-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4 title">
                            <h1 className="fw-bolder">Experience.</h1>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-10 mx-auto" >
                            <div className="row gx-2 bg-navyBlue text-white p-4 p-md-5 rounded-3  experience ">
                                <div className="col-md-3 ">
                                    <p className="fs-5 fw-bold">Operations Executive</p>
                                    <p className="fst-italic fw-lighter">Infosys | Remote</p>
                                    <p className="text-muted">Nov 2021 - Present</p>
                                    <p className="badge bg-warning fw-bold">Full Time</p>
                                </div>
                                <div className="col-md-9 border-start  ">
                                    <div className="ms-3">
                                        <p className="fs-5 fw-bold">Infosys</p>
                                        <ul>
                                            <li>Got trained in Microsoft Technologies (C#, ASP.NET Web API, EF Core, SQL Server and Web Technologies such as HTML5, CSS3, JavaScript, TypeScript, Angular 7)</li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row gx-2 bg-navyBlue text-white p-4 p-md-5 rounded-3 experience">
                                <div className="col-md-3 ">
                                    <p className="fs-5 fw-bold">Web Developer</p>
                                    <p className="fst-italic fw-lighter">InfoLead | Remote</p>
                                    <p className="text-muted">Jan 2021 - Present</p>
                                    <p className="badge bg-warning fw-bold">Freelancer</p>
                                </div>
                                <div className="col-md-9 border-start">
                                    <div className="ms-3">
                                        <p className="fs-5 fw-bold">InfoLead</p>
                                        
                                        <ul>
                                            <li>Worked with Twilio and NodeJS to develop a entire automation connecting WhatsApp with Podio CRM which increased the customer service
                                                by 90% and improved the efficiency by over 95%.</li>
                                            <li>Collabrating and developed a KPI Tracker product for REI Proverty Invest which increased the analytical efficiency of the Podio user by over 80%.
                                            </li>
                                            <li>Utilized ReactJS, Responsive Web Design and RESTful API to develop 7+ original business websites encompassing design, coding, testing and maintenance.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="separated"></div>

                </div>

            </section>
        </>
    )
}

export default Experience