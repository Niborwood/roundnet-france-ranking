import React from 'react';

import Skeleton from '@mui/material/Skeleton';

function LoadingSkeleton() {
  return (
    <div className="loading">
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
    </div>
  );
}

export default LoadingSkeleton;
