import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { Josefin_Sans } from "next/font/google";
import Chair from "../Assets/chair.png";
import Prod1 from "../Assets/Prod1.png";
import Prod2 from "../Assets/Prod2.png";
import Prod3 from "../Assets/Prod3.png";
import Prod4 from "../Assets/Prod4.png";
import CardList from "@/components/CardList";
const josef = Josefin_Sans({ subsets: ["latin"] });

const ItemCards = [
  { title: "Cantilever chair", price: "$42.00", picture: Prod1 },
  { title: "Cantilever chair", price: "$30.00", picture: Prod2 },
  { title: "Cantilever chair", price: "$51.00", picture: Prod3 },
  { title: "Cantilever chair", price: "$80.00", picture: Prod4 },
];

export default function Home() {
  return (
    <div className={josef.className}>
        <Banner
          introduction="Best Furniture For Your Castle...."
          title="New Furniture Collection Trends in 2020"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          picture={Chair}
        />
        <CardList title="Featured Products" ItemCard_List={ItemCards} />
    </div>
  );
}
