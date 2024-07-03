import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome hablu uncle",
  description: "As Salamu Alaikum, Uncle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <ul className="text-xl mb-10 text-green-500 flex justify-center gap-8">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/userList"}>User List</Link>
            </li>
            <li>Contact</li>
            <li>SignUp</li>
          </ul>
          {children}
        </div>
      </body>
    </html>
  );
}
