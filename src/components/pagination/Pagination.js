import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Pagination extends PureComponent {
  render() {
    const {
      handleGoToNextPage,
      handleGoToPreviousPage,
      pageIndex,
      totalItems
    } = this.props;

    return (
      <div className="row align-items-center mb-3">
        <div className="col-md-6 text-left">
          <div>Page {pageIndex} of {totalItems}</div>
        </div>
        <div className="col-md-6 text-right">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleGoToPreviousPage}
            disabled={pageIndex === 1}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              color="#6d757c"
              size="lg"
            />
          </button>
          <button
            type="button"
            className="btn btn-light ml-2"
            onClick={handleGoToNextPage}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#6d757c"
              size="lg"
            />
          </button>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {

};

export default Pagination;