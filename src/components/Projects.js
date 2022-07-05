import React from 'react'

function Projects() {
    return (
        <>
            <section class="bg-deepDark text-white py-5">

                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-4 title">
                            <h1 class="fw-bolder">Some Things I’ve Built .</h1>
                        </div>
                    </div>
                    <div class="col-md-10 mx-auto " >
                        <div class="row mb-4 gx-2" >
                            <div class="col-md-5 mx-auto my-auto project-img ">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    class="img-fluid rounded-3" alt="" />
                            </div>
                            <div class="col-md-7 project-info bg-deepNavyBlue p-4">
                                <p class="text-muted">Featured Project</p>
                                <h2 class="fs-5 fw-bold">Appointly</h2>
                                <p>Appointly is a calendar scheduling tool that is both powerful and simple to use. Easily
                                    configure your availability settings, then email or embed the link with your client or team
                                    member.</p>
                                <div class="d-flex flex-row bd-highlight">
                                    <div class="me-2 bd-highlight badge rounded-pill bg-warning">Angular 7 </div>
                                    <div class="me-2 bd-highlight badge rounded-pill bg-warning">ASP.NET Web API</div>
                                    <div class="me-2 bd-highlight badge rounded-pill bg-warning">SQL Server</div>
                                </div>

                                <div class="d-flex flex-row bd-highlight mt-3">
                                    <div class="p-2 bd-highlight"> <i class="fa fa-github" aria-hidden="true"></i></div>
                                    <div class="p-2 bd-highlight"><i class="fa fa-link" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-4 gx-2">
                            <div class="col-md-5 mx-auto my-auto project-img order-lg-2">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                                    class="img-fluid rounded-3" alt="" />
                            </div>
                            <div class="col-md-7 project-info bg-deepNavyBlue p-4">
                                <p class="text-muted">Featured Project</p>
                                <h2 class="fs-5 fw-bold">Personal Website V1</h2>
                                <p>First iteration of my personal website. Designed and developed with a conscious effort to
                                    avoid using any superfluous frameworks like Bootstrap.</p>
                                <div class="d-flex flex-row bd-highlight">
                                    <div class="me-2 bd-highlight badge rounded-pill bg-warning">React JS </div>
                                    <div class="me-2 bd-highlight badge rounded-pill bg-warning">Bootstrap 5</div>
                                </div>

                                <div class="d-flex flex-row bd-highlight mt-3">
                                    <div class="p-2 bd-highlight"><a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="p-2 bd-highlight"><a href=""><i class="fa fa-link" aria-hidden="true"></i></a>
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