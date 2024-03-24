import React from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";


export default function LegalComponent() {
    return (
        <>
            <li><Link href="#">ນິຕິກຳ<IoIosArrowDown className="arrowDown" /></Link>
                <ul className="sub-menu">
                    <li><Link href="#">ກົດໝາຍ ແລະ ນິຕິກຳລຸ່ມກົດໝາຍ</Link></li>
                    <li><Link href="#">ສາລະບານງົບປະມານ-ບັນຊີ</Link></li>
                    {/* <li><Link href="#">Dropdown 3<IoIosArrowForward className="arrowRigth"/></Link>
                <ul>
                    <li><Link href="#">ຍ່ອຍ 1</Link></li>
                    <li><Link href="#">ຍ່ອຍ 3<IoIosArrowForward className="arrowRigth"/></Link>
                        <ul>
                            <li><Link href="#">ຍ່ອຍ 1</Link></li>
                            <li><Link href="#">ຍ່ອຍ 2</Link></li>
                            <li><Link href="#">ຍ່ອຍ 3</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">ຍ່ອຍ 2</Link></li>
                </ul>
            </li> */}
                </ul>
            </li>
        </>
    );
}
