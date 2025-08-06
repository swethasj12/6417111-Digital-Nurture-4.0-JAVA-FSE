import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books, blogs, courses } from './data';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      <div className="mystyle1">
        <h1>Course Details</h1>
        {showCourses && <CourseDetails courses={courses} />}
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? 'Hide' : 'Show'} Courses
        </button>
      </div>

      <div className="st2">
        <h1>Book Details</h1>
        {showBooks ? <BookDetails books={books} /> : <p>No book data available</p>}
        <button onClick={() => setShowBooks(!showBooks)}>
          Toggle Books
        </button>
      </div>

      <div className="v1">
        <h1>Blog Details</h1>
        {showBlogs && blogs.length > 0 && <BlogDetails blogs={blogs} />}
        {!showBlogs && <p>Blogs are hidden</p>}
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? 'Hide' : 'Show'} Blogs
        </button>
      </div>
    </div>
  );
}

export default App;
