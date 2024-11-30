import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BlogPagination = ({ count = 10, currentPage = 1, onPageChange }) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination 
        count={count} 
        page={currentPage} // Sync the active page
        shape="rounded" 
        onChange={(event, page) => onPageChange(page)} 
      />
    </Stack>
  );
};

export default BlogPagination;
