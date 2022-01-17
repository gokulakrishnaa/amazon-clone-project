import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt="background"
        />
        <div className="home__row">
          <Product
            id="100"
            title="Steve Jobs: The Exclusive Biography by Walter Isaacson(2015-01-27)"
            image="https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg"
            price={350}
            rating={4}
          />
          <Product
            id="101"
            title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future"
            image="https://m.media-amazon.com/images/I/5112YFsXIJL.jpg"
            price={400}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="102"
            title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
            image="https://images-eu.ssl-images-amazon.com/images/I/41I4ZIBgc3S._SX300_SY300_QL70_FMwebp_.jpg"
            price={1200}
            rating={3}
          />
          <Product
            id="103"
            title="Sony Alpha ILCE-7M3K Full-Frame 24.2MP Mirrorless Digital SLR Camera with 28-70mm Zoom Lens "
            image="https://m.media-amazon.com/images/I/71j3bPnm+UL._SL1500_.jpg"
            price={2200}
            rating={4}
          />
          <Product
            id="104"
            title="Sony 85mm f/5-6.3 DG OS HSM Contemporary Lens for Canon Cameras (745101)"
            image="https://www.sony-africa.com/image/24e43fd945d1c8f56097dd84b485fc71?fmt=pjpeg&wid=330&hei=330&bgcolor=F1F5F9&bgc=F1F5F9"
            price={1500}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="105"
            title="
            OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
            image="https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8000-ua75tu8000kxxl-frontblack-226346468?$720_576_PNG$"
            price={2500}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
