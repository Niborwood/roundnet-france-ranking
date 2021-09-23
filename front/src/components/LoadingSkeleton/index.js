import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function LoadingSkeleton() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
}

export default LoadingSkeleton;
