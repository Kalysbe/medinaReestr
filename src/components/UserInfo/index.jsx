import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, fullname, additionalText }) => {
  const utcDate = new Date(additionalText)
  const options = { month: 'long', day: 'numeric' };
  const localDate = utcDate.toLocaleDateString('ru-RU', options);

  return (
    <div className={styles.root}>
      {/* <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={fullname} /> */}
      {/* <div className={styles.userDetails}> */}
        {/* <span className={styles.userName}>{fullname}</span> */}
        <span className={styles.additional}>{localDate}</span>
      {/* </div> */}
    </div>
  );
};
