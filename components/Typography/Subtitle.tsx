import React from 'react';
import styles from './Typography.module.scss';

interface Props {
  children: string,
}

function Subtitle(props: Props) {
  const { children, ...rest } = props;

  return (
    <p className={styles.subtitle} {...rest}>
      {children}
    </p>
  );
}

export default Subtitle;
