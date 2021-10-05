import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={
          userId === 'github'
            ? 'https://avatars1.githubusercontent.com/u/9919?v=4'
            : 'https://avatars.githubusercontent.com/u/69631?v=4'
        }
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userId === 'github' ? 'GitHub' : 'Facebook'}</span>
        <span className="user__location">
          {userId === 'github' ? 'San Francisco,CA' : 'Menlo Park, California'}
        </span>
      </div>
    </div>
  );
};

export default User;
