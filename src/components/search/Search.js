import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Styles
import './search.css';

class Search extends PureComponent {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-8 col-md-mx">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#6d757c"
                  size="lg"
                />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search courses"
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;