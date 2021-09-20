import React from 'react';
import dateOfBirthday from './dateOfBirthday';

export default props => {
  return (
    <>
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">
        {`Was born ${dateOfBirthday(props.userData.birthDate)} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
};
