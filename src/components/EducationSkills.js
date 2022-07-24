import React from 'react'

function EducationSkills() {
  return (
   <>
     <section className="bg-deepDark text-white pt-5">

<div className="container">
    <div className="row">
        <div className="col-12 mb-4 title">
            <h1 className="fw-bolder">Education & Skills .</h1>
        </div>
    </div>

    <div className="row gx-2 d-flex justify-content-around">
        <div className="col-md-4 bg-navyBlue p-4 rounded-3 education-box my-auto">
            <ul>
                <li><span className="text-muted">2021-2023</span>
                    <h6>Master of Computer Application</h6>
                    <p className="text-muted">Uttaranchal University</p>
                    <p className="text-muted ">(CGPA - 8.70) </p>
                </li>
                <li><span className="text-muted">2018-2021</span>
                    <h6>B.SC Information Technology </h6>
                    <p className="text-muted">Uttaranchal University</p>
                    <p className="text-muted">(CGPA - 9.58)</p>
                </li>
                {/* <li><span className="text-muted">2018</span>
                    <h6>10+2</h6>
                    <p className="text-muted">Krishnagar Academy</p>
                    <p className="text-muted ">(65%) </p>
                </li>
                <li><span className="text-muted">2016</span>
                    <h6>10</h6>
                    <p className="text-muted">Bishop Morrow School</p>
                    <p className="text-muted ">(72%) </p>
                </li> */}


            </ul>
        </div>
        <div className="col-md-7 mx-auto my-auto">
            <div className="row my-4">
                <div className="col-md-2 col-2 my-auto mx-auto">

                    <h2>72%</h2>

                </div>
                <div className="col-md-10 col-10 my-auto">
                    <div>
                        <p>Javascript</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "72%"}}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2 col-2 my-auto mx-auto">

                    <h2>75%</h2>

                </div>
                <div className="col-md-10 col-10 my-auto">
                    <div>
                        <p>React JS</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2 col-2 my-auto mx-auto">

                    <h2>88%</h2>

                </div>
                <div className="col-md-10 col-10 my-auto">
                    <div>
                        <p>SQL Server</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "88%"}}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2 col-2 my-auto mx-auto">

                    <h2>60%</h2>

                </div>
                <div className="col-md-10 col-10 my-auto">
                    <div>
                        <p>MongoDB</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "60%"}}></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-2 col-2 my-auto mx-auto">

                    <h2>80%</h2>

                </div>
                <div className="col-md-10 col-10 my-auto">
                    <div>
                        <p>Git</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "80%"}}></div>
                        </div>
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

export default EducationSkills