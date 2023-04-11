import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { Josefin_Sans, Lato } from "next/font/google";
import Chair from "../Assets/chair.png";
import ItemCard from "@/components/ItemCard";
import Prod1 from "../Assets/Prod1.png";
const lato = Lato({ subsets: ["latin"], weight: ["100", "300"] });
const josef = Josefin_Sans({ subsets: ["latin"] });
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
        <div className="container mx-auto">
          <div className="text-5xl m-4 font-bold text-center">
            Featured Products
          </div>
          <div className="flex md:flex-row flex-col justify-center ">
            <ItemCard title="Cantilever chair" price="$42.00" picture={Prod1} />
            <ItemCard title="Cantilever chair" price="$42.00" picture={Prod1} />
            <ItemCard title="Cantilever chair" price="$42.00" picture={Prod1} />
            <ItemCard title="Cantilever chair" price="$42.00" picture={Prod1} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
