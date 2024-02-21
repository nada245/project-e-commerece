import React from 'react'
import Product from './Product'
import img1 from '../images/2061830.webp'
import img2 from '../images/5bd0fd4b3edf6-wallpaper-preview.jpg'
import img3 from '../images/apple-carbon-wallpaper-preview.jpg'
import img4 from '../images/silver-logo-samsung-wallpaper-preview.jpg'
import img5 from '../images/thumb2-nokia-carbon-logo-4k-grunge-art-carbon-background-creative.jpg'
import img6 from '../images/2061830.webp'

const Home = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src={img6} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100 " height="80%" alt="Iphone" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product/>
        </>
    )
}

export default Home


