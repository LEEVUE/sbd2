import "./globals.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MarqueeTop from "./components/marqueeTop";

// import { Inter } from "next/font/google";
// ໃຊ້ Font ສຳລັບພາສາອັງກິດເທົ່ານັ້ນ
// const inter = Inter({ subsets: ["latin"] }); className={inter.className}


export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <body>
            <Header/>
            <Navbar/>
            <main className="body-wrap">
                {children}
            </main>
            <Footer/>
        </body>
    </html>
    );
}
