class Courses {
  static getAllCourses = async (pageIndex, pageSize, courseName) => {
    const XML_COURSES = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${pageIndex}&pageSize=${pageSize}&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${courseName}`;
    try {
      const response = await fetch(XML_COURSES);

      return await response.json();
    } catch (error) {
      throw new Error(`There was an error getting the cources. ${error}`);
    }
  }

  static getTopCourses = async () => {
    const XML_TOP_COURSES = 'https://api.cebroker.com/v2/featuredCoursesProfession?profession=36';

    try {
      const response = await fetch(XML_TOP_COURSES);
      
      return await response.json();
    } catch (error) {
      throw new Error(`There was an error getting the cources top. ${error}`); 
    }
  }
}

export default Courses;