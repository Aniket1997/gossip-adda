import React from 'react';
import GroupList from '../component/Group/GroupList';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Home Page</h1>
      <GroupList />
    </div>
  );
};

export default Home;
