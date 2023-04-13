import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { Josefin_Sans, Lato } from "next/font/google";
import Chair from "../Assets/chair.png";
import ItemCard from "@/components/ItemCard";
import Prod1 from "../Assets/Prod1.png";
import CardList from "@/components/CardList";
const josef = Josefin_Sans({ subsets: ["latin"] });

const ItemCards = [
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
];

export default function Home() {
  return (
    <div className={josef.className}>
      <Layout>
        <Banner
          introduction="Best Furniture For Your Castle...."
          title="New Furniture Collection Trends in 2020"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          picture={Chair}
        />
        <CardList title="Featured Products" ItemCard_List={ItemCards} />
      </Layout>
    </div>
  );
}
