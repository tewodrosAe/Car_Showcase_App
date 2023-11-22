export async function fetchFoods() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

  const response = await fetch(url)
  const result = await response.json()
  console.log(result.meals)
  return result.meals
}