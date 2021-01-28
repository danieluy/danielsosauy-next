import React from 'react';
import styles from './Content.module.scss';

interface Props {
  id: string,
  children: JSX.Element | JSX.Element[],
  component?: string,
  className?: string,
  style?: any,
}

function Content(props: Props) {
  const { children, component = 'div', className = '', id, style, ...rest } = props;

  return React.createElement(
    component,
    {
      id,
      style,
      ...rest,
      className: `${styles.root} ${className}`,
    },
    children,
  );
}

export default Content;
