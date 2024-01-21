import { GetStaticProps, GetStaticPaths } from "next";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { Josefin_Sans } from "next/font/google";
import Chair from "../../Assets/Sofa.png";
import Prod1 from "../../Assets/Sofa4.png";
import Prod2 from "../../Assets/Sofa1.png";
import Prod3 from "../../Assets/Sofa2.png";
import Prod4 from "../../Assets/Sofa3.png";
import CardList from "@/components/CardList";
import { useRouter } from "next/router";
const josef = Josefin_Sans({ subsets: ["latin"] });
import { ItemCard_Props } from "@/Interfaces";

type Props = {
  items: ItemCard_Props[];
  errors?: string;
};

export default function Products({ items }: Props) {
  const router = useRouter();
  const slug = (router.query.slug as string) || null;
  return (
    <div className={josef.className}>
        <Banner
          introduction="Home &rarr; Products"
          title="Explore Our Products"
          picture={Chair}
        />
        {items && <CardList title={`Featured ${slug}`} ItemCard_List={items} />}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = [{ params: { slug: "sofas" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const items = [
      { title: "Comfort Handy Craft", price: "$42.00", picture: Prod1 },
      { title: "Comfort Handy Craft", price: "$30.00", picture: Prod2 },
      { title: "Comfort Handy Craft", price: "$51.00", picture: Prod3 },
      { title: "Comfort Handy Craft", price: "$80.00", picture: Prod4 },
    ];

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { items } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
