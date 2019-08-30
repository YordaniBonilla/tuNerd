import React from 'react';

function NavBar () {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="Images/letter-p.png" width="40" height="40" alt=""/>
            </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                    <div class="dropdown">
                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">
                            Explore
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/planetCalculator.html">Planet Weight</a>
                            <a class="dropdown-item" href="moons.html">Moons</a>
                            <a class="dropdown-item" href="magazines.html">Magazines</a>
                        </div>
                        
                    </div>
                    </li>
                    </ul>
                    <div class="ml-auto">
                      <button type="button" class="btn btn-info  btn-sm mr-2">Login</button>    
                      <button type="button" class="btn btn-info  btn-sm">Sign Out</button>
                    </div>
        </div>
    </nav>
    );
}

export default NavBar;