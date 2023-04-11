import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josef = Josefin_Sans({ subsets: ["latin"] });
type Banner_Props = {
  introduction?: string;
  description?: string;
  title?: string;
  picture?: any;
};

const Banner = ({
  title,
  description,
  introduction,
  picture,
}: Banner_Props) => {
  return (
    <div className={`bg-light-pink w-full h-3/4 ${josef.className}`}>
      <div className="container mx-auto px-4 grid grid-cols-2 place-items-center h-full">
        <div className="flex flex-col justify-center">
          <div className="text-pink text-sm p-4">{introduction}</div>
          <div className="text-6xl">{title}</div>
          <div className="text-3xl text-base p-4">{description}</div>
        </div>
        <div className="rounded-full bg-pink/10">
          <Image src={picture} alt="My Image" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
