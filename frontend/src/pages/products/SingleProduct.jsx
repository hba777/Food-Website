import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  console.log(item);

  //   // Split instructions by period followed by a space to get individual steps
  //   const instructionsArray = item.instructions
  //     .split(". ")
  //     .filter((step) => step.length > 0);

  const extractNumber = (timeString) => {
    let timeArray = timeString.split("");
    return parseInt(timeArray[0]);
  };

  let prepTimeMinutes = extractNumber(item?.more[0].prep_time);
  let cookTimeMinutes = extractNumber(item?.more[0].cook_time);

  const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt="Thumbnail Image"
              className="md:max-w-[90%] w-full md:h-[570px]
                    md:rounded-xl md:mx-auto"
            />
          </picture>

          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary ">{item.name}</h1>
            <p className="mt-6">
              An easy and quick dish, perfect for any meal.
            </p>

            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h2 className="text-xl font-semibold ml-2">Preparation time</h2>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-yellow-500">
                <li className="pl-3">
                  <p>
                    <span>Total:</span> <span>{totalTimeMinutes} minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Preparation:</span>{" "}
                    <span>{item.more[0].prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cooking:</span> <span>{item.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>

            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Ingredients</h3>
              <ul className="list-disc marker:text-yellow-500 mt-4 ml-6 marker:align-middle ">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name}</span>:
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h2 className="text-2xl font-bold mb-4">Cooking Instructions</h2>
              <ul className="list-decimal mt-4 ml-6">
                {item?.instructions
                  .split(/\d+\.\s+/) // Correct regular expression to split by "number. " pattern
                  .filter(Boolean) // Removes any empty strings
                  .map((instruction, index) => (
                    <li key={index}>
                      <span>{instruction}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
