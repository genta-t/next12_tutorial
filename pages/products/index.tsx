import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { TypeLink } from '../../types/types';

const Products = () => {
  const links: TypeLink[] = [
    {
      key: "0",
      url: "smartphone",
      name: "スマートフォン"
    },
    {
      key: "1",
      url: "pc",
      name: "パソコン"
    },
    {
      key: "2",
      url: "headphone",
      name: "ヘッドフォン"
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          {links.map((l) => {
            return (
              <li key={l.key}>
                <Link href={`/products/${l.url}`}>
                  {l.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default Products;