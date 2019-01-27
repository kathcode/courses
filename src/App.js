import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import coursesAPI from './api/courses';

// Own components
import Card from './components/card';
import Search from './components/search';
import Pagination from './components/pagination';
import WrapperCoursesList from './components/wrapperCoursesList';

// Styles
import './App.css';

class App extends Component {
  state = {
    allCourses: {},
    topCourses: [],
    searchText: '',
    pageIndex: 1,
    pageSize: 20,
  }

  componentDidMount() {
    this.getAllCourses();
    this.getTopCourses();
  }

  /**
   * Get the all the courses from the api and update the courses in the state
   *
   * @memberof App
   */
  getAllCourses = async () => {
    const {
      pageIndex,
      pageSize,
      searchText
    } = this.state;
    const allCourses = await coursesAPI.getAllCourses(pageIndex, pageSize, searchText);

    this.setState({ allCourses });
  }

  /**
   * Get the top courses from the api and update the courses in the state
   *
   * @memberof App
   */
  getTopCourses = async () => {
    const topCourses = await coursesAPI.getTopCourses();

    this.setState({ topCourses });
  }

  /**
   * Make a request to find the courses with the text search.
   *
   * @memberof App
   */
  searchCourse = (text) => {
    const searchText = text.target.value;
    this.setState({ searchText }, () => this.getAllCourses());
  };

  /**
   * Make a request to get the list of courses with the new index page.
   * Increased the pageIndex so that it brings the data of the next page
   *
   * @memberof App
   */
  handleGoToNextPage = () => {
    this.setState((state) => {
      return {
        pageIndex: state.pageIndex + 1,
        allCourses: {}
      }
    }, () => this.getAllCourses());
  }

  /**
   * Make a request to get the list of courses with the new index page.
   * A page is subtracted to bring the data from the previous page
   *
   * @memberof App
   */
  handleGoToPreviousPage = () => {
    this.setState((state) => {
      return {
        pageIndex: state.pageIndex - 1,
        allCourses: {}
      }
    }, () => this.getAllCourses());
  }

  render() {
    const {
      allCourses,
      topCourses,
      searchText,
      pageIndex,
    } = this.state;

    return (
      <div className="App">
        <div className="header">
          <Search
            value={searchText}
            onChange={this.searchCourse}
          />
        </div>

        <WrapperCoursesList>
          {!searchText && <h1>Top courses</h1>}
          {topCourses.length > 0 &&
            !searchText &&
            topCourses.map((course) => (
            <Card
              key={course.id}
              id={course.id}
              title={course.coursePublication && course.coursePublication.course.name}
              price={course.coursePublication.price}
              imageUrl={course.coursePublication.course.featuredBanner || ''}
              description={course.provider && course.coursePublication.course.name}
              hours={course.coursePublication.totalHours}
              deliveryMethod={course.deliveryMethod && course.deliveryMethod.description}
            />
          ))}

          <h2 className="mt-5">Courses list</h2>
          <Pagination
            handleGoToNextPage={this.handleGoToNextPage}
            handleGoToPreviousPage={this.handleGoToPreviousPage}
            totalItems={allCourses.totalItems}
            pageIndex={pageIndex}
          />

          {allCourses.items && allCourses.items.map((course) => (
            <Card
              key={course.id}
              id={course.id}
              title={course.course && course.course.name}
              price={course.price}
              imageUrl={course.featuredBanner}
              description={course.provider && course.provider.name}
              hours={course.totalHours}
              deliveryMethod={course.deliveryMethod && course.deliveryMethod.description}
            />
          ))}

          {!allCourses.items &&
            <div className="text-center">
              <FontAwesomeIcon
                icon={faSpinner}
                color="#6d757c"
                size="lg"
                spin
              />
            </div>
          }
        </WrapperCoursesList>
      </div>
    );
  }
}

export default App;
