import { Exo_2 } from "next/font/google";
import { ComponentProps, FC } from "react";

const inter = Exo_2({ subsets: ["latin"] });

type Props = ComponentProps<"h1">;

export const H1: FC<Props> = ({ children }) => {
  return <h1 className={inter.className}>{children}</h1>;
};
