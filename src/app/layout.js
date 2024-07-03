"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Welcome hablu uncle",
//   description: "As Salamu Alaikum, Uncle",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto mt-4">
          {pathName !== "/userList" ? (
            <ul className="text-xl mb-10 text-green-500 flex justify-center gap-8">
              <li>
                <Link
                  href={"/"}
                  className={`${
                    pathName === "/"
                      ? "bg-black text-white p-2 rounded-xl font-bold"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/about"
                      ? "bg-black text-white p-2 rounded-xl font-bold"
                      : ""
                  }`}
                  href={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/userList"
                      ? "bg-black text-white p-2 rounded-xl font-bold"
                      : ""
                  }`}
                  href={"/userList"}
                >
                  User List
                </Link>
              </li>
              <li>Contact</li>
              <li>SignUp</li>
            </ul>
          ) : (
            <Link href={"/"} className="flex justify-center font-bold">
              Home
            </Link>
          )}
          {children}
        </div>
      </body>
    </html>
  );
}
