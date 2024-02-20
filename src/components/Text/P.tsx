import { Montserrat } from "next/font/google";
import { ComponentProps, FC } from "react";

const inter = Montserrat({ subsets: ["latin"] });

type Props = ComponentProps<"p">;

export const P: FC<Props> = ({ children }) => {
  return <p className={inter.className}>{children}</p>;
};
