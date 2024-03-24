import React from 'react';
import "./marqueeTop.css";
import Link from "next/link";
import { MdBookmarkBorder, MdBookmarkAdded  } from "react-icons/md";


export default function MarqueeTop() {
    return (
    <div>
        <div className='news-container'>
            <div className='news-header-container'>
                <div className="news-header-text">
                    <div className='khaosarn-container'>
                        <p>ຂ່າວສານ<span>ໃໝ່</span></p>
                    </div>
                    <div className="khaosarn-streaming">- - 2 0 2 4 - -</div>
                </div>
                <div className="khaosarn-header-effect"></div>
                <div className="khaosarn-header-effect"></div>
            </div>
            <div className='news-content'>
                <ul>
                    <li><Link href="#" ><span><MdBookmarkBorder className='react-icon bm-nofill'/><MdBookmarkAdded className='react-icon bm-fill'/></span>
                        ດຳລັດ ວ່າດ້ວຍການສ້າງແຜນງົບປະມານແຫ່ງລັດ ສະບັບເລກທີ 254/ລບ, ລົງວັນທີ 18 ສິງຫາ 2023.</Link>
                    </li>
                    <li><Link href="#" ><span><MdBookmarkBorder className='react-icon bm-nofill'/><MdBookmarkAdded className='react-icon bm-fill'/></span>
                        ແຈ້ງການ ການຄົ້ນຄວ້າຈັດສັນແຜນລາຍຈ່າຍບ້ວງລົງທຶນອື່ນໆ ເລີ່ມແຕ່ປີ 2024 ສະບັບເລກທີ 0270/ຫກ, ລົງວັນທີ 30 ມັງກອນ 2024.</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )


}
