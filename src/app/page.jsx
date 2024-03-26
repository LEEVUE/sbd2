import Image from "next/image";
import styles from "./page.module.css";
import MarqueeTop from "./components/marqueeTop";
import Header from './components/header';

export default function Home() {
  return (
    <main>
      <MarqueeTop/>
      <div className={styles.header} >
        <h1>ເວັບໄຊທ໌ທາງການ ກົມງົບປະມານແຫ່ງລັດ</h1>
        <hr />
      </div>
      <div className={styles.ytclips} > 
      {/* width="560" height="315"  */}
        <div className="items">
          <iframe width="553" height="315" src="https://www.youtube.com/embed/vt7Kn8v9PpY?si=ux65SWMK6InuVnNj" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className={styles.ytclipsContent} >
          <p>ຂະບວນການສ້າງແຜນງົບປະມານແຫ່ງລັດ ຕາມກົດໝາຍວ່າດ້ວຍງົບປະມານແຫ່ງລັດ ສະບັບເລກທີ 71/ສພຊ, ລົງວັນທີ 16 ທັນວາ 2015, ກົດໝາຍວ່າດ້ວຍການປັບປຸງບາງມາດຕາຂອງກົດໝາຍວ່າດ້ວຍງົບປະມານແຫ່ງລັດ ສະບັບເລກທີ 13/ສພຊ, ລົງວັນທີ 17 ພະຈິກ 2021 ແລະ ດຳລັດວ່າດ້ວຍການສ້າງແຜນງົບປະມານແຫ່ງລັດ ສະບັບເລກທີ 254/ລບ, ລົງວັນທີ 18 ສິງຫາ 2023.</p>
        </div>
      </div>
    </main>
  );
}
