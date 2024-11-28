import Image from "next/image";
import Link from "next/link";

interface Dish {
  imageSrc: string;
  name: string;
  description: string;
  price: number | string;
}

const OrderPage = () => {
  const dishes: Dish[] = [
    {
      imageSrc: "/ugali.jpg",
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
  ];

  const whatsappNumber = "+250783757180"; // Replace with your actual WhatsApp number
  const message =
    "Hello, I would like to place an order for the following dishes:";

  return (
    <section>
      <nav className="px-8 py-4 bg-yellow-800 text-white flex items-center justify-between w-full">
        <div className="font-bold text-4xl ">Ikaze Fast Food</div>
        <div className="hidden lg:flex items-center gap-4 justify-evenly">
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Dishes</span>
          </Link>
          <Link href={"/"}>
            <span>Categories</span>
          </Link>
          <Link href={"/"}>
            <span>Menu</span>
          </Link>
          <Link href={"#contact"}>
            <span>Contacts</span>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Order Your Favorite Dishes
        </h1>

        {/* Dishes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden"
            >
              {/* Dish Image */}
              <div className="relative w-full h-48">
                <Image
                  src={dish.imageSrc}
                  alt={dish.name}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>

              {/* Dish Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {dish.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                <div className="text-lg font-semibold text-gray-800 mb-4">
                  {dish.price}RWF
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you would like to place an order or have any inquiries, reach out
            to us via WhatsApp.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
