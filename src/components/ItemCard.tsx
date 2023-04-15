import Image from "next/image";

type ItemCard_Props = {
  title?: string;
  price?: string;
  picture?: any;
};

const ItemCard = ({ title, price, picture }: ItemCard_Props) => {
  return (
    <div className=" transition duration-300 hover:scale-110">
      <div className=" bg-prod mt-4 mx-4 rounded flex flex-col justify-center items-center h-60">
        <Image src={picture} alt="product"></Image>
      </div>
      <div className=" h-20 bg-white drop-shadow-md h-20 mb-4 mx-4 rounded flex flex-col justify-center items-center">
        <div className="text-pink font-bold">{title}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
