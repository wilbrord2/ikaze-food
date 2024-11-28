import Image from "next/image";

interface FoodCategoryProps {
  categoryImage: string;
  categoryName: string;
  description: string;
  foodNames: string[];
}

const FoodCategoryCard: React.FC<FoodCategoryProps> = ({
  categoryImage,
  categoryName,
  description,
  foodNames,
}) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Category Image */}
      <div className="relative w-full h-48">
        <Image
          src={categoryImage}
          alt={categoryName}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{categoryName}</h2>
        
        {/* Category Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Food List */}
        <ul className="list-disc list-inside text-gray-800 text-sm mb-4">
          {foodNames.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>

        {/* Browse Button */}
        <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition">
          Browse {categoryName}
        </button>
      </div>
    </div>
  );
};

export default FoodCategoryCard;
