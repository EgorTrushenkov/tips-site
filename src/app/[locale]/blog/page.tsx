import Footer from "@/components/footer/footer";
import styles from "@/styles/blog.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Blog() {
  const localActive = useLocale();
  const i = 1;
  return (
    <>
      <div className="px-10 lg:px-[10px] lg:overflow-hidden">
        <h2 className={styles.title}>Блог</h2>
        <div className={styles.articles}>
          <Link href={`./blog/statia` + i}>
            <div className={styles.article}>
              <div className={styles.article_image}>
                <img
                  src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6654ace9455d57019a38f628_66551fc130414a5bf929c2b8/lazy_smart_crop_1280x720"
                  alt="img_statia"
                />
              </div>
              <div className={styles.article_details}>
                <h3 className={styles.article_title}>
                  Как стать разработчиком на C++?
                </h3>
                <p className={styles.article_desc}>
                  Заполните пожалуйста форму, это поможет нам точно понять в
                  каком направлении нам двигаться...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-10 lg:px-[10px]">
        <Footer />
      </div>
    </>
  );
}
