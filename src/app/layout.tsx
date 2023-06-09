import { ContextProvider } from "@/context/ContextProvider";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
