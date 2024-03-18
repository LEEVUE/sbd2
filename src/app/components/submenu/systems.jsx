import React from 'react'
import Link from 'next/link'
import { IoIosArrowDown} from "react-icons/io";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function SystemComponent() {
  return (
    <>
    <div className="center-box">
        <div className="animated-border-box"></div>
        <li id="platform" className='animated'><Link href="/systems">ລະບົບ<IoIosArrowDown className="arrowDown" /></Link>
                <ul className="sub-menu">
                    <li><Link href="https://rtis.gov.la/gfisplus" target="_blank">ລະບົບ GFIS Plus <PiArrowUpRightBold className="arrowRigth"/></Link></li>
                    <li><Link href="#">ລະບົບ FMIS</Link></li>
                    <li><Link href="#">ລະບົບ E-Reading</Link></li>
                </ul>
        </li>
    </div>
    </>
  )
}

