import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    

        <li><a className="nav-link active bg-light d-inline" aria-current="page" href="#">Home</a></li>
            <li><a className="nav-link bg-light d-inline mb-5" href="#">Link</a></li>

        
    </div>
  </div>
</nav>
  )
}

export default Navbar
