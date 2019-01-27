import React from 'react';

const CardImage = ({ url, alt }) => (
  <div className="col-md-4">
    <div className="image">
      <img
        src={`https://storage.cebroker.com/CEBroker/${url}`}
        alt={alt}
        className="img-fluid"
      />
    </div>
  </div>
);

export default CardImage;