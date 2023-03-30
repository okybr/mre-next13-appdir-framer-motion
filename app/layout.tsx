import { PropsWithChildren } from "react";
import Client from "./client";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
