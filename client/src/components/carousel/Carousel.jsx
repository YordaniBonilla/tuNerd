import React from 'react';

function Carousel () {
   
    return (
        <>
        <h4>Click Planet Image for brief details</h4>
        <div class="d-flex p-2 bd-highlight container justify-content-center">

            <div id="PlanetCarousel" class="carousel style" data-ride="carousel" data-keyboard="true">
                <ol class="carousel-indicators">
                    <li data-target="#PlanetCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#PlanetCarousel" data-slide-to="1" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="2" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="3" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="4" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="5" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="6" ></li>
                    <li data-target="#PlanetCarousel" data-slide-to="7" ></li>

                </ol>
                <div class="carousel-inner" role="listbox">
                    <div id="planet1" class="carousel-item active" data-interval="10000">
                        <img src="Images/Mercury.jpg"
                            class="d-block w-100 h-100" alt="Plant Mercury"/>
                            <div class="carousel-caption">
                                <h3>Mercury</h3>
                            </div>
                </div>
                        <div id="planet2" class="carousel-item" data-interval="10000">
                            <img src="Images/Venus.jpg"
                                class="d-block w-100 h-100" alt="..."/>
                                <div class="carousel-caption">
                                    <h3>Venus</h3>
                                </div>
                </div>
                            <div id="planet3" class="carousel-item" data-interval="10000">
                                <img src="Images/Earth.jpg"
                                    class="d-block w-100 h-100" alt="...x"/>
                                    <div class="carousel-caption">
                                        <h3>Earth</h3>
                                    </div>
                </div>
                                <div id="planet4" class="carousel-item" data-interval="10000">
                                    <img src="Images/Mars.jpg"
                                        class="d-block w-100 h-100" alt="..."/>
                                        <div class="carousel-caption">
                                            <h3>Mars</h3>
                                        </div>
                </div>
                                    <div id="planet5" class="carousel-item" data-interval="10000">
                                        <img src="Images/Jupiter.jpg"
                                            class="d-block w-100 h-100" alt="..."/>
                                            <div class="carousel-caption">
                                                <h3>Jupiter</h3>
                                            </div>
                </div>
                                        <div id="planet6" class="carousel-item" data-interval="10000">
                                            <img src="Images/Saturn.jpg"
                                                class="d-block w-100 h-100" alt="..."/>
                                                <div class="carousel-caption">
                                                    <h3>Saturn</h3>
                                                </div>
                </div>
                                            <div id="planet7" class="carousel-item" data-interval="10000">
                                                <img src="Images/Uranus.jpg"
                                                    class="d-block w-100 h-100" alt="..."/>
                                                    <div class="carousel-caption">
                                                        <h3>Uranus</h3>
                                                    </div>
                </div>
                                                <div id="planet8" class="carousel-item" data-interval="10000">
                                                    <img src="Images/Neptune.jpeg"
                                                        class="d-block w-100 h-100" alt="..."/>
                                                        <div class="carousel-caption">
                                                            <h3>Neptune</h3>
                                                        </div>
                </div>


                                                    <a class="carousel-control-prev" href="#PlanetCarousel" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#PlanetCarousel" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
        </>                                
    ); 
}

export default Carousel;