import React, { useState } from 'react';
import '../../styles/post.css';
import showcase from '../../assets/images/showcase.jpg';
import BlogPagination from './BlogPagination';

const BlogPostList = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const postsPerPage = 3; // Number of posts per page
  const totalPosts = 9; // Total number of posts (this could come from your backend)
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add logic to fetch posts for the selected page
    console.log(`Current page is ${page}`);
  };

  // Dummy posts (replace with real data)
  const posts = [
    { id: 1, title: 'Post Title 1', category: 'Web Development', author: 'Author' },
    { id: 2, title: 'Post Title 2', category: 'Design', author: 'Author' },
    { id: 3, title: 'Post Title 3', category: 'SEO', author: 'Author' },
    { id: 4, title: 'Post Title 4', category: 'Web Development', author: 'Author' },
    { id: 5, title: 'Post Title 5', category: 'Design', author: 'Author' },
    { id: 6, title: 'Post Title 6', category: 'SEO', author: 'Author' },
    { id: 7, title: 'Post Title 7', category: 'Web Development', author: 'Author' },
    { id: 8, title: 'Post Title 8', category: 'Design', author: 'Author' },
    { id: 9, title: 'Post Title 9', category: 'SEO', author: 'Author' },
  ];

  // Filter posts for the current page
  const displayedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <div className="container px-4 py-8">
        {/* Flexbox Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content Section (Post List) */}
          <div className="flex-[2] border-2 bg-[#b0b0b0] p-8 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>

            {displayedPosts.map((post) => (
              <section key={post.id}>
                <article className="mb-6 border-b pb-4">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    By {post.author} | Category: {post.category}
                  </p>

                  <img
                    src={showcase}
                    alt="post"
                    className="rounded-lg w-full h-64 object-cover mb-6"
                  />

                  <p className="text-black-700">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </article>
              </section>
            ))}

            <BlogPagination count={totalPages} onPageChange={handlePageChange} />
          </div>

          {/* Sidebar Section (Categories, Latest Comments) */}
          <aside className="flex-[1]">
            <div className="rounded-lg bg-gray-600 p-6 mb-6">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="mb-6">
                <li className="text-gray-700">Web Development</li>
                <li className="text-gray-700">Design</li>
                <li className="text-gray-700">SEO</li>
              </ul>
            </div>

            <div className="rounded-lg py-6 bg-gray-600 p-6">
              <h2 className="text-xl font-bold mb-4">Latest Comments</h2>
              <ul>
                <li className="text-gray-700">"Great post!" - John</li>
                <li className="text-gray-700">"Very informative." - Jane</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogPostList;
