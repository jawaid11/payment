import React,{useState} from 'react'

const Program = () => {
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
          <option value="">Programs</option>
          <option value="course1">Program 1</option>
          <option value="course2">Program 2</option>
          <option value="course3">Program 3</option>
        </select>
      </div>
    );
}

export default Program