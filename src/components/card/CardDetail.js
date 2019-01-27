import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDesktop } from '@fortawesome/free-solid-svg-icons'

const CardDetail = ({ title, price, description, hours, deliveryMethod }) => (
  <div className="row">
    <div className="col-md-10">
      <div className="title mb-3">{title}</div>
      <div>{description}</div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <FontAwesomeIcon
              icon={faClock}
              color="#6d757c"
              size="lg"
            />
            <span className="ml-2">{hours}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <FontAwesomeIcon
              icon={faDesktop}
              color="#6d757c"
              size="lg"
            />
            <span className="ml-2">{deliveryMethod}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <div className="price text-right">$ {price}</div>
    </div>
  </div>
);

export default CardDetail;