import Layout from "@/components/Layout";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300"] });
export default function Home() {
  return (
    <div className={lato.className}>
      <Layout>
        <h1 className="text-3xl font-bold text-center ">Hello world!</h1>
      </Layout>
    </div>
  );
}
