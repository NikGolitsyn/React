import React from 'react';
import dateOfBirthday from './dateOfBirthday';

export default props => {
  return (
    <>
      <p className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </p>
      <p className="profile__birth">
        Was born {dateOfBirthday(props.userData.birthDate)} in {props.userData.birthPlace}
      </p>
    </>
  );
};
