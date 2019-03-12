import React from 'react';
import Header from './Header'

const Page404 = () => {
  return (
    <div>
    <Header />
      <div className="grid-posts">
        <div className="grid-posts-item1">
          This post doesn't exist
          </div>
      </div>
    </div>
  );
}

export default Page404
