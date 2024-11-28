import Image from "next/image";
import Link from "next/link";

interface FoodCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string | number;
}

const FoodCard: React.FC<FoodCardProps> = ({ imageSrc, name, description, price }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Food Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={name}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>

      {/* Food Content */}
      <div className="p-4">
        {/* Food Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        
        {/* Food Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Price */}
        <div className="text-lg font-semibold text-gray-800 mb-4">{price} RWF</div>

        {/* Order Button */}
        <Link href="/order">
        <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition">
          Order Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
