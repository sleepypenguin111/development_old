import React from "react";

const Dog = (props) => {
  const { dog, onAdd, onRemove } = props;
  return (
    <div className="mx-6 my-3 max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#1">
        <img className="object-contain w-60 h-40" src={dog.photo} alt="hi" />
      </a>
      <div className="p-5">
        <a href="#1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {dog.breed}
          </h5>
        </a>
        {dog.temperament.map((temp) => <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {temp}
        </p>)}
        <p className="mb-2 font-bold">
            $ {dog.price}
        </p>
        
        <button
          onClick={() => onAdd(dog)}
          href="#1"
          className="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
        <button
          onClick={() => onRemove(dog)}
          href="#1"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Dog;
