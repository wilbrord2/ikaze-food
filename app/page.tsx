"use client";
import Image from "next/image";
import FoodCard from "./components/foodCard";
import FoodCategoryCard from "./components/categorieCard";

const TraditionalFood = [
  {
    imageSrc: "/burger1.avif",
    name: "Ugali with Sukuma Wiki",
    description:
      "A traditional East African dish made with maize flour and served with sautéed collard greens.",
    price: 4000,
  },
  {
    imageSrc: "/jollof.jpg",
    name: "Jollof Rice",
    description:
      "A popular West African dish made with rice, tomatoes, onions, and a blend of spices.",
    price: 6500,
  },
  {
    imageSrc: "/chapati.jfif",
    name: "Chapati and Beans",
    description:
      "Soft flatbread served with a savory stew of beans cooked in coconut sauce.",
    price: 3000,
  },
  {
    imageSrc: "/bors.jpg",
    name: "Boerewors and Pap",
    description:
      "A South African dish featuring spiced sausage paired with maize porridge.",
    price: 8900,
  },
  {
    imageSrc: "/chicken-biryani-5.jpg",
    name: "Biryani",
    description:
      "A fragrant rice dish layered with spiced meat or vegetables, popular in East Africa and South Asia.",
    price: "10,000",
  },
  {
    imageSrc: "/grilled.jpeg",
    name: "Injera with Doro Wat",
    description:
      "Ethiopian sourdough flatbread served with a spicy chicken stew.",
    price: 7990,
  },
];

const cat1 = {
  categoryImage: "/burger1.avif",
  categoryName: "Traditional Food",
  description:
    "Explore a variety of delicious and freshly rwandan food with your favorite toppings.",
  foodNames: ["Kawunga", "Ubugali", "Imyumbati", "Ibijumba"],
};
const cat2 = {
  categoryImage: "/pizza1.jpg",
  categoryName: "Junk Food",
  description:
    "Explore a variety of delicious and freshly made fast food with your favorite toppings.",
  foodNames: ["Pizza", "Burger", "Hot dogs", "Wrapps"],
};
const cat3 = {
  categoryImage: "/soda.jfif",
  categoryName: "Drinks",
  description: "Explore a variety of drinks with your favorite toppings.",
  foodNames: ["Soda", "Coffee", "Ice cream", "Water"],
};

export default function Home() {
  return (
    <div className="w-full h-full">
      <nav className="px-8 py-4 bg-yellow-800 text-white flex items-center justify-between w-full">
        <div className="font-bold text-4xl ">Ikaze Fast Food</div>
        <div className="hidden lg:flex items-center gap-4 justify-evenly">
          <span>Home</span>
          <a href="#dishes">
            <span>Dishes</span>
          </a>
          <a href="#categories">
            <span>Categories</span>
          </a>
          <a href="#menu">
            <span>Menu</span>
          </a>
          <a href="#contact">
            <span>Contacts</span>
          </a>
        </div>
        <a href="#dishes">
          <span className="px-4 py-2 rounded-lg  bg-yellow-600">Order now</span>
        </a>
      </nav>
      <section className="relative w-full h-[90vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/burger1.avif"
            alt="burger"
            fill={true}
            style={{ objectFit: "cover" }}
            className="brightness-90 blur-sm"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-2xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Delicious Fast Food Delivered to Your Door
          </h1>
          <p className="text-lg mb-8">
            Satisfy your cravings with our freshly made, mouth-watering Fast
            Food. Crafted with premium ingredients and delivered hot to your
            doorstep!
          </p>
          <h1 className="text-2xl font-bold mb-6">Eat well live well</h1>
          <button
            className="px-6 py-3 bg-yellow-600 text-white
            rounded-md hover:bg-yellow-600 transition"
          >
            <a href="#dishes">Order Now</a>
          </button>
        </div>
      </section>

      <section id="categories" className=" w-full p-8">
        <h1 className="text-4xl font-bold text-center py-8">Our Categories</h1>
        <div className="flex w-full items-center justify-center  flex-wrap gap-8">
          <div>
            <h1 className="text-2xl font-bold pb-4 ">Traditional Food</h1>
            <FoodCategoryCard
              categoryImage={cat1.categoryImage}
              categoryName={cat1.categoryName}
              description={cat1.description}
              foodNames={cat1.foodNames}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold  pb-4 ">Hot Deals</h1>
            <FoodCategoryCard
              categoryImage={cat2.categoryImage}
              categoryName={cat2.categoryName}
              description={cat2.description}
              foodNames={cat2.foodNames}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold  pb-4 ">Drinks</h1>
            <FoodCategoryCard
              categoryImage={cat3.categoryImage}
              categoryName={cat3.categoryName}
              description={cat3.description}
              foodNames={cat3.foodNames}
            />
          </div>
        </div>
      </section>

      <section id="dishes" className="p-8 ">
        <div>
          <h1 className="text-4xl font-bold text-center py-8">
            Our different Dishes
          </h1>
          <div className="w-full flex items-center justify-center gap-4 flex-wrap">
            {TraditionalFood.map((dish, index) => (
              <FoodCard
                key={index}
                imageSrc={dish.imageSrc}
                name={dish.name}
                description={dish.description}
                price={dish.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="flex flex-col items-center justify-center w-full py-8 bg-[#080808]"
      >
        <h1 className="text-4xl font-bold text-center py-8 text-white">
          Our MENU
        </h1>
        <Image src={"/menu.png"} alt="menu" height={600} width={500} />
      </section>

      <section
        id="contact"
        className="flex items-center justify-center gap-2 bg-yellow-900 text-white p-8"
      >
        <span className="text-2xl font-bold">Contacts:</span>
        <span>+250-785694467</span>
        <span>ikazefastfood@gmail.com</span>
      </section>
    </div>
  );
}
