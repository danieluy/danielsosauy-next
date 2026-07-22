"use client";

import { FC, ReactNode, createContext, useCallback, useMemo } from "react";

type AuthState = {
  _t: (key: string) => string;
};

export const IntlContext = createContext<AuthState>({} as AuthState);

export const IntlProvider: FC<{
  children: ReactNode;
  messages: Record<string, string>;
}> = ({ children, messages }) => {
  const _t = useCallback(
    (key: string): string => {
      const message = messages[key];

      if (!message) {
        console.error(`Missing translation for key "${key}"`);
      }

      return message ?? key;
    },
    [messages]
  );

  const value: AuthState = useMemo(() => ({ _t }), [_t]);

  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>;
};
