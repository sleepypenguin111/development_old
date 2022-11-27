import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Dog from "./components/Dog";
import { data } from "./data";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const originalDogs = data.dogBreeds;

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [isSorted, setIsSorted] = useState(false);

  const [intelligence, setIntelligence] = useState(false);
  const [friend, setFriend] = useState(false);
  const [gentle, setGentle] = useState(false);

  const onAdd = (dog) => {
    const exist = cartItems.find((x) => x.breed === dog.breed);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.breed === dog.breed ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...dog, qty: 1 }]);
    }
    const temp = total + dog.price;
    setTotal(temp);
  };

  const onRemove = (dog) => {
    const exist = cartItems.find((x) => x.breed === dog.breed);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.breed !== dog.breed));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.breed === dog.breed ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    const temp = total - dog.price;
    setTotal(temp);
  };

  const onSort = (feature) => {
    setIsSorted(!isSorted);
  };

  const onFilter = (feature) => {
    if (feature === "All") {
      setDogs(originalDogs);
    } else if (feature === "Intelligence") {
      setIntelligence(!intelligence);
    } else if (feature === "Friendly") {
      setFriend(!friend);
    } else if (feature === "Gentle") {
      setGentle(!gentle);
    }
  };

  const handleReset = () => {
    setCartItems([]);
    setTotal(0);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    setDogs(originalDogs);
  };

  useEffect(() => {
    let sortedDogs = originalDogs;

    if (friend) {
      sortedDogs = sortedDogs.filter((dog) =>
        dog.temperament.includes("Friendly")
      );
    }

    if (gentle) {
      sortedDogs = sortedDogs.filter((dog) =>
        dog.temperament.includes("Gentle")
      );
    }

    if (intelligence) {
      sortedDogs = sortedDogs.filter((dog) =>
        dog.temperament.includes("Intelligent")
      );
    }

    if (isSorted) {
      sortedDogs = [...sortedDogs].sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
    }
    setDogs(sortedDogs);
  }, [isSorted, friend, intelligence, gentle, originalDogs]);
  return (
    <div className="App">
      <h1 className="text-5xl font-bold my-8">Welcome to the Dog Store !!</h1>
      <div className="flex">
        <div className="w-3/12 ml-[6rem]">
          <div>
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              total={total}
            />
            <button
              onClick={() => handleReset()}
              class="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>
            <h2 className="mt-10 text-blue-500 text-3xl font-bold flex flex-col">
              Qualities:
            </h2>
            <div class="flex justify-center mt-4 flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => onFilter("Intelligent")}
              />
              <label for="default-checkbox" class="text-lg ml-2">
                Intelligent
              </label>
            </div>

            <div class="flex justify-center items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => onFilter("Gentle")}
              />
              <label for="default-checkbox" class="text-lg ml-2">
                Gentle
              </label>
            </div>

            <div class="flex justify-center items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => onFilter("Friendly")}
              />
              <label for="default-checkbox" class="text-lg ml-2">
                Friendly
              </label>
            </div>
            <h2 className="mt-10 text-blue-500 text-3xl font-bold flex flex-col">
              Sort By:
            </h2>
            <div class="flex justify-center mt-4 flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => onSort("cheapest")}
              />
              <label for="default-checkbox" class="text-lg ml-2">
                price (cheapest first)
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-9/12">
          {dogs.map((dog) => (
            <Dog dog={dog} onAdd={onAdd} onRemove={onRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
