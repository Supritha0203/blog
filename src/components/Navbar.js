import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    

        <li><a class="nav-link active bg-light d-inline" aria-current="page" href="#">Home</a></li>
            <li><a class="nav-link bg-light d-inline mb-5" href="#">Link</a></li>

        
    </div>
  </div>
</nav>
  )
}

export default Navbar
