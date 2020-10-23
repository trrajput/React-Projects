import React from 'react';

function NavBar1(props) {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* <a className="navbar-brand" href="/"><img style={{ width: '50px', height: '50px' }} src="https://image.freepik.com/free-vector/best-recipes-logo-with-yellow-pan_23-2147492924.jpg" /></a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Recipe List  {window.location.pathname === '/' ? <span className="sr-only">(current)</span> : null}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/add-recipe">Add Recipe {window.location.pathname === '/add-recipe' ? <span className="sr-only dark">(current)</span> : null}</a>
                                </li>
                            </ul>
                        </div>
                        {window.location.pathname === '/' ?
                            <form className="form-inline">
                                <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" onChange={props.filterSearchMethod} />
                            </form>
                            : null}
                    </nav>

                </div>
            </div>
        </div>
    )
}


export default NavBar1
