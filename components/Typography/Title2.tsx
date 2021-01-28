import React from 'react';
import styles from './Typography.module.scss';

interface Props {
  children: string,
}

function Title2(props: Props) {
  const { children, ...rest } = props;

  return (
    <h3 className={styles.title2} {...rest}>
      {children}
    </h3>
  );
}

export default Title2;
