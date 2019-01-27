import React from 'react';

const WrapperCoursesList = ({ children }) => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-8 courses-container-list">
        {children}
      </div>
    </div>
  </div>
);

export default WrapperCoursesList;
