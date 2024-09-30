import {Poppins} from "next/font/google"
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});


export const metadata = {
  title: "Second Starter kit",
  description: "This is the starter kit i hope to use for my future projects, as i improve, i will imporove on it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
