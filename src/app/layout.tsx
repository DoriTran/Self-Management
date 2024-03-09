import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import App from "./_components/App/App";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Self Management",
  description: "Self Management - Writing nextJS app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
