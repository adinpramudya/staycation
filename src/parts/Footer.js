import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-12 col-lg-2 mr-5">
            <h6 className="mt2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 mr-5">
            <h6 className="mt2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 mr-5">
            <h6 className="mt2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, SCBD, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copyrights">
            Copyright 2021 ??? All Rights Reserved ??? Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
