import React from 'react';
import styles from './Typography.module.scss';

interface Props {
  children: string,
  tabIndex?: number,
}

function Title(props: Props) {
  const { children, tabIndex, ...rest } = props;

  return (
    <h2 tabIndex={tabIndex} className={styles.title} {...rest}>
      {children}
    </h2>
  );
}

export default Title;
