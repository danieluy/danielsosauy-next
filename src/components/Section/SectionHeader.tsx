import { FC, ReactElement, ReactNode } from "react";
import classes from "./SectionHeader.module.css";

type Props = {
  id: string;
  children: ReactNode;
  hero?: ReactElement;
};

export const SectionHeader: FC<Props> = ({ id, children, hero }) => {
  return (
    <header className={classes.header} id={id}>
      {hero}

      <a href={`#${id}`}>{children}</a>
    </header>
  );
};
