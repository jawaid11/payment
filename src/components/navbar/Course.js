import React, { useState } from 'react';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseSelection = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <select
        id="course"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={selectedCourse}
        onChange={handleCourseSelection}
      >
        <option value="">Courses</option>
        <option value="course1">Course 1</option>
        <option value="course2">Course 2</option>
        <option value="course3">Course 3</option>
      </select>
    </div>
  );
};

export default Course;
