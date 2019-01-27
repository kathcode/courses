import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Card components
import Image from './CardImage';
import Detail from './CardDetail';

import './card.css';

class Card extends PureComponent {
  render() {
    const {
      id,
      title,
      price,
      description,
      hours,
      deliveryMethod,
      imageUrl
    } = this.props;

    return (
      <div className="row box-card">
        {imageUrl &&
          <Image url={imageUrl} alt={id} />
        }

        <div className={`col-md-${imageUrl ? '8' : '12' } detail`}>
          <Detail
            title={title}
            price={price}
            description={description}
            hours={hours}
            deliveryMethod={deliveryMethod}
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  hours: PropTypes.number,
  deliveryMethod: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  title: '',
  description: '',
  hours: 0,
  deliveryMethod: '',
  imageUrl: '',
}

export default Card;