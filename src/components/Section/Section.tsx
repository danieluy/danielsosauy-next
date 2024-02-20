import { FC, ReactNode } from "react";
import classes from "./Section.module.css";

type Props = {
  id?: string;
  children: ReactNode;
};

export const Section: FC<Props> = ({ id, children }) => {
  return (
    <section id={id} className={classes.section}>
      {children}
    </section>
  );
};
