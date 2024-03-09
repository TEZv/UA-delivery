import { useState } from 'react'; // Add this import statement

const Summary = ({ setTitle }) => {
  const [selectedShop, setSelectedShop] = useState(null); // Add selectedShop state

  const handleSetTitle = (title) => {
    setTitle(title);
    setSelectedShop(title === selectedShop ? null : title);
  };

  return (
    <div className="container pt-12 mx-auto flex-col text-kindaBlack space-y-10 pl-4 text-center">
      <div className="text-4xl tracking-wider text-white font-bold">
        We offer comfortable conditions for you.
      </div>
      <div className="text-lg md:w-2/3 mx-auto text-white font-medium">
        Hey there! Delicious, home-cooked meals delivered straight to your
        doorstep. Our dishes come from all corners of Ukraine, so there's
        something for everyone's taste buds. Feel free to check out all the
        yummy options!😊
        <div className="text-lg md:w-2/3 mx-auto text-white font-bold">
          We collaborate with{" "}
          <span className="bg-beige hover:bg-yellow-400 hover:text-blue-800 text-red-700 cursor-pointer rounded-md px-2 py-1">
            4 restaurants:
          </span>{" "}
          <br />
          BuB Pizzeria Cat&Flow Lucky Guy eats here || I'm Cook :)
        </div>
      </div>

      <br />
      <div className="container flex gap-4 space-y-6 mx-auto w-full md:w-2/5 border-3">
        <div className="flex justify-center">
          <div className="">
            <button
              onClick={() => handleSetTitle("🍕BuB Pizzeria")}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-8 px-32 rounded-2xl mr-2 ${selectedShop !== null && selectedShop !== "🍕BuB Pizzeria" && "disabled:bg-gray-500"}`}
              disabled={selectedShop !== null && selectedShop !== "🍕BuB Pizzeria"}
            >
              🍕BuB Pizzeria
            </button>
            <button
              onClick={() => handleSetTitle("🍔Cat&Flow")}
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-8 px-32 rounded-2xl mr-2 mt-6 ${selectedShop !== null && selectedShop !== "🍔Cat&Flow" && "disabled:bg-gray-500"}`}
              disabled={selectedShop !== null && selectedShop !== "🍔Cat&Flow"}
            >
              🍔Cat&Flow
            </button>
            <button
              onClick={() => handleSetTitle("🍓Lucky Guy eats here")}
              className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-8 px-28 rounded-2xl mr-2 mt-6 ${selectedShop !== null && selectedShop !== "🍓Lucky Guy eats here" && "disabled:bg-gray-500"}`}
              disabled={selectedShop !== null && selectedShop !== "🍓Lucky Guy eats here"}
            >
              🍓Lucky Guy eats here
            </button>
            <button
              onClick={() => handleSetTitle("🥦I'm Cook :)")}
              className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-8 px-32 rounded-2xl mr-2 mt-6 ${selectedShop !== null && selectedShop !== "🥦I'm Cook :)" && "disabled:bg-gray-500"}`}
              disabled={selectedShop !== null && selectedShop !== "🥦I'm Cook :)"}
            >
              🥦I'm Cook :)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
