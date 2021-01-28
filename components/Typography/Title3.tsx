import React, { Fragment } from 'react';
import styles from './Typography.module.scss';


interface Props {
  children: string,
}
function Title3(props: Props) {
  const { children, ...rest } = props;

  return (
    <h4 className={styles.title3} {...rest}>
      {children}
    </h4>
  );
}

export default Title3;
