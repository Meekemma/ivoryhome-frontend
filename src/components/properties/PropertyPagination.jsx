import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PropertyPagination = ({ count = 10, currentPage = 1, onPageChange }) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={count}
        page={currentPage}
        shape="rounded"
        onChange={(event, page) => onPageChange(page)}
        sx={{
          '& .MuiPaginationItem-root': {
            backgroundColor: '#333', // Charcoal black background
            color: 'white', // White text
            border: '1px solid #444', // Optional: dark border for pagination items
          },
          '& .Mui-selected': {
            backgroundColor: '#555 !important', // Darker charcoal for selected item
            color: 'white !important', // Ensure text remains white for selected item
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#444', // Darker charcoal on hover
            color: 'white', // Ensure text stays white on hover
          },
        }}
      />
    </Stack>
  );
};

export default PropertyPagination;
