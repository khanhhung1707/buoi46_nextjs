import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      Trang chủ
      <Image src="https://i.pravatar.cc?u=1" crossOrigin="anonymous"  width={200} height={200} quanlity={75} alt="..." />
      <button className="btn btn-dark">Click</button>
      {/*cách chèn hình tự add vào */}
      <Image src={'/img/images.jpg'} crossOrigin="anonymous"  width={200} height={200} quanlity={75} alt="..." />
      
    </main>
  );
}
