import React from 'react'
function Projects() {
    return (
        <>
            <section className="bg-deepDark text-white py-5">

                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4 title">
                            <h1 className="fw-bolder">Some Things I’ve Built .</h1>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto " >
                        <div className="row mb-4 gx-2" >
                            <div className="col-md-5 mx-auto my-auto project-img ">
                            <img src={process.env.PUBLIC_URL+"images/Appointly.png"}
                                    className="img-fluid rounded-4" alt="" />
                            </div>
                            <div className="col-md-7 project-info bg-deepNavyBlue p-4">
                                <p className="text-muted">Featured Project</p>
                                <h2 className="fs-5 fw-bold">Appointly</h2>
                                <p>Appointly is a calendar scheduling tool that is both powerful and simple to use. Easily
                                    configure your availability settings, then email or embed the link with your client or team
                                    member.</p>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">Angular 7 </div>
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">ASP.NET Web API</div>
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">SQL Server</div>
                                </div>

                                <div className="d-flex flex-row bd-highlight mt-3">
                                    <div className="p-2 bd-highlight"><a href='https://github.com/dev-lotus/Appointly.com' target={"blank"}><i className="fa fa-github" aria-hidden="true"></i></a></div>
                                    <div className="p-2 bd-highlight"><a href='https://appointly.netlify.app/' target={"blank"}><i className="fa fa-link" aria-hidden="true"></i> </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 gx-2">
                            <div className="col-md-5 mx-auto my-auto project-img order-lg-2">
                                <img src={process.env.PUBLIC_URL+"images/PortfolioWebiste.png"}
                                    className="img-fluid rounded-4" alt="" />
                            </div>
                            <div className="col-md-7 project-info bg-deepNavyBlue p-4">
                                <p className="text-muted">Featured Project</p>
                                <h2 className="fs-5 fw-bold">Portfolio Website V1</h2>
                                <p>First iteration of my portfolio website. Learned a bit of ReactJS & as well as responsive design using Bootstrap and so created this. Since then, i think my web development and design skills have improved immensely.</p>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">React JS </div>
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">Bootstrap 5</div>
                                    <div className="me-2 bd-highlight badge rounded-pill bg-warning">CSS</div>
                                </div>

                                <div className="d-flex flex-row bd-highlight mt-3">
                                    <div className="p-2 bd-highlight"><a href="https://github.com/dev-lotus/v1" target={"blank"}><i className="fa fa-github" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="p-2 bd-highlight"><a href="https://lotusbiswas.netlify.app/" target={"blank"}><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects