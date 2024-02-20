import { Exo_2 } from "next/font/google";
import { ComponentProps, FC } from "react";

const inter = Exo_2({ subsets: ["latin"] });

type Props = ComponentProps<"h2">;

export const H2: FC<Props> = ({ children }) => {
  return <h2 className={inter.className}>{children}</h2>;
};
