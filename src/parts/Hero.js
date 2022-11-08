import React from "react";
import Fade from "react-reveal/Fade";
import imageHero from "assets/images/img-hero.jpg";
import imageHeroFrame from "assets/images/img-hero-frame.jpg";
import iconTraveler from "assets/images/icons/icon-traveler.svg";
import iconCities from "assets/images/icons/icon-cities.svg";
import iconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <Fade bottom>
        <div className="row align-items-center">
          <div
            className="col-12 col-lg-auto pl-lg-4 mb-5 mb-lg-5"
            style={{ width: 530 }}
          >
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto mr-lg-5">
                <img
                  width="36"
                  height="36"
                  src={iconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto mr-lg-5">
                <img
                  width="36"
                  height="36"
                  src={iconTreasure}
                  alt={`${props.data.treasures} treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto mr-lg-5">
                <img
                  width="36"
                  height="36"
                  src={iconCities}
                  alt={`${props.data.cities} cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 pl-lg-4">
            <div className="hero-image-placeholder">
              <img
                src={imageHero}
                alt="Room with couches"
                className="img-fluid position-relative"
                style={{ zIndex: 2 }}
              />
              <img
                src={imageHeroFrame}
                alt="Room with couches frame"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
