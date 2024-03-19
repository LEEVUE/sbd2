import React from 'react'
import "./footer.css"
import Link from 'next/link'
import { FaFacebook , FaYoutube, FaWhatsapp  } from "react-icons/fa6"; 
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <div className="footer-detail">ສະຫງວນລິຂະສິດ © ພະແນກຄຸ້ມຄອງງົບປະມານສູນກາງ ກົມງົບປະມານແຫ່ງລັດ ກະຊວງການເງິນ</div>
            <div className="social-container">
                <Link className='facebook' href="https://facebook.com/sbdlaos" target='_blank'>
                    <FaFacebook className='social-outline fb'/><span>Facebook</span>
                </Link>
                <Link className='youtube' href="https://www.youtube.com/channel/UCg0t2mVlWVj1P6otQPwoEoA" target='_blank'>
                    <FaYoutube className='social-outline yt' /><span>Youtube</span>
                </Link>
                <Link className="whatsapp" href="https://wa.me/8562078776143" target='_blank'>
                    <FaWhatsapp className='social-outline' /><span>Whatsapp</span>
                </Link>
                <Link className='email' href="mailto:sbd-dept@mof.gov.la" target='_blank'>
                    <MdOutlineEmail className='social-outline' /><span>Email</span>
                </Link>
            </div>
        </footer>
    )
}
