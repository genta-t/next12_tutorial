import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'
import { TypeProductProps, TypeRouteParams } from "../../types/types";
import Image from "next/image";

// SSGの場合
// export const getStaticProps: GetStaticProps<TypeProductProps, TypeRouteParams> = async ({ params }) => {
//   if (!params || typeof params.id !== 'string') {
//     return {
//       notFound: true, 
//     };
//   }
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

// export const getStaticPaths = async () => {
//   const req = await fetch(`http://localhost:3000/products.json`);
//   const data = await req.json();

//   const paths = data.map((product: string) => {
//     return {
//       params: {
//         id: product,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   }
// };

// SSRの場合
export const getServerSideProps: GetStaticProps<TypeProductProps, TypeRouteParams> = async ({ params }) => {
  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true, 
    };
  }
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

const Product = ({ product }: TypeProductProps) => {
  const router = useRouter();
  console.log(router.query.id);
  const { id } = router.query; // router.query.idと同じ意味

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページ</h1>
        <div style={{ width: '80%', height: '40vw', position: 'relative' }}>
          <Image src={product.image} layout="fill" objectFit="cover" alt="" />
        </div>
        <p>{product.name}</p>
        <br />
        <Link href="/products">
          商品一覧へ
        </Link>
      </main>
    </div>
  );
}

export default Product;