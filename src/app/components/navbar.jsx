import Link from "next/link"
import "./navbar2.css"
import SystemComponent from "./submenu/systems"; 
import LegalComponent from "./submenu/Legal";
import { FiSearch } from "react-icons/fi";
import Image from "next/image"
import styles from "./page.module.css" // ເພີ່ມສະໄຕເຂົ້າໄປໃນ class ແບບສະເພາະເຈາະຈົງ

export default function Navbar() {
    return(
    <>
        <nav>
            <menu>
                <ul className="menu-container">
                    <li><Link href="/">ໜ້າທຳອິດ</Link></li>
                    <li><Link href="/role">ພາລະບົດບາດ</Link></li>
                    <LegalComponent/>
                    <li><Link href="/organization">ການເຄື່ອນໄຫວ</Link></li>
                    <li><Link href="/organization">ໂຄງຮ່າງການຈັດຕັ້ງ</Link></li>
                    <SystemComponent/>
                    <li><Link href="">ຕິດຕໍ່ພົວພັນ</Link></li>
                </ul>
                <ul className="search-container">
                    <Link href="/" className="search-box"><FiSearch className="searchIcon" />ຄົ້ນຫາ</Link>
                    {/* <Link href="/" className="lang-container">
                        <Image src="/LAO.svg" width={26} height={20} alt="My SVG" />
                        <div>LAO</div>
                    </Link>
                    <Link href="/en" className="lang-container">
                        <Image src="/ENG.svg" width={25} height={25} alt="My SVG" />
                        <div>ENG</div>
                    </Link> */}
                </ul>
            </menu>
        </nav>
    </>
    )
}

