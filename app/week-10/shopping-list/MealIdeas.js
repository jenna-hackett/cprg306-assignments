"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();

      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Define loadMealIdeas.
    const loadMealIdeas = async () => {
      if (ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      } else {
        setMeals([]);
      }
    };

    loadMealIdeas();
  }, [ingredient]); // Re-run effect when the ingredient changes.


  return (
    <div className="bg-pink-900 border-rose-400 border-2 rounded-lg p-5 mb-4 max-w-md mt-9 mx-8">
      <h2 className="text-2xl font-bold text-pink-200 mb-2">Meal Ideas</h2>
      {/* No ingredient is selected */}
      {!ingredient ? (
        <p className="text-white mt-2 italic">Select an item from the list to see meal ideas</p>
      ) : (
        <>
          <p className="text-white mt-2 mb-4">
            Here are some meal ideas using <span className="font-bold text-pink-200">`{ingredient}`</span>:
          </p>
          
          {/* Ingredient is selected but no meals found. */}
          {meals.length === 0 ? (
            <p className="text-pink-300 italic">No meal ideas found for this ingredient.</p>
          ) : (
            /* Meal List */
            <ul className="space-y-3">
              {meals.map((meal) => (
                <li 
                  key={meal.idMeal} 
                  className="p-3 bg-pink-800 border-2 border-rose-300 rounded-md text-white hover:bg-pink-700 transition-colors"
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}