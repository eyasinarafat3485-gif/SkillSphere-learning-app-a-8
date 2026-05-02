import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere | Online Courses",
  description: "Online Courses Plathform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark light"
      className={`${outfit.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main>{children}</main>
         <ToastContainer />
        
        </body>
    </html>
  );
}
