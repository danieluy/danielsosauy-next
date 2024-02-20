"use client";

import { FC, MouseEventHandler, ReactNode, useCallback, useState } from "react";
import { ChevronDown } from "react-feather";
import classes from "./Accordion.module.css";

type Props = {
  children: ReactNode;
  header: ReactNode;
  isOpen?: boolean;
  id: string;
  className?: string;
  openLabel?: string;
};

export const Accordion: FC<Props> = ({
  children,
  header,
  isOpen,
  id,
  className,
  openLabel,
}) => {
  const [_isOpen, setIsOpen] = useState(isOpen ?? false);

  const handleClick: MouseEventHandler<HTMLElement> = useCallback(
    (evt: any) => {
      evt.stopPropagation();

      setIsOpen((prev) => !prev);
    },
    []
  );

  return (
    <div className={className}>
      <div className={classes.header} onClick={handleClick}>
        <span>{header}</span>

        <button
          onClick={handleClick}
          aria-controls={id}
          aria-expanded={isOpen ?? _isOpen}
          id={`${id}-button`}
          className={classes.button}
        >
          {openLabel}
          <ChevronDown
            className={`${classes.chevron} ${
              isOpen ?? _isOpen ? classes["chevron-open"] : ""
            }`}
          />
        </button>
      </div>

      <div
        id={id}
        className={`${classes.collapsible} ${
          isOpen ?? _isOpen ? classes.open : ""
        }`}
        role="region"
        aria-hidden={!(isOpen ?? _isOpen)}
        aria-labelledby={`${id}-button`}
      >
        <div className={classes.inner}>{children}</div>
      </div>
    </div>
  );
};
