import { FC, ReactElement, ReactNode } from "react";
import classes from "./ImageFrame.module.css";

type Props = {
  children: ReactElement;
  caption?: ReactNode;
};

export const ImageFrame: FC<Props> = ({ children, caption }) => {
  return (
    <figure className={classes.figure}>
      {children}

      {caption && (
        <figcaption className={classes.figcaption}>
          <small>{caption}</small>
        </figcaption>
      )}
    </figure>
  );
};
