import React from 'react';
import Navbar from '../components/general/Navbar';
import HomeFooter from '../components/general/HomeFooter';
import SinglePostPage from '../components/blog/SinglePostPage';

const SinglePost = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-128px)] flex justify-center items-center">
        <SinglePostPage />
      </main>
      <HomeFooter />
    </>
  );
};

export default SinglePost;
