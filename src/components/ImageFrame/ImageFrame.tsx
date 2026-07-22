import { FC, ReactElement, ReactNode } from "react";
import classes from "./ImageFrame.module.css";

type Props = {
  children: ReactElement;
  caption?: ReactNode;
  className?: string;
};

export const ImageFrame: FC<Props> = ({ children, caption, className }) => {
  return (
    <figure className={`${classes.figure} ${className ?? ""}`}>
      {children}

      {caption && (
        <figcaption className={classes.figcaption}>
          <small>{caption}</small>
        </figcaption>
      )}
    </figure>
  );
};
