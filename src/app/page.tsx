import { fetchFoods } from "@/utils";
/* mport { HomeProps } from "@/types"; */
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

export default async function Home(/* { searchParams }: HomeProps */) {
  const allFoods = await fetchFoods();
  const isDataEmpty = !Array.isArray(allFoods) || allFoods.length < 1 || !allFoods;
  console.log(isDataEmpty)
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          {/* <SearchBar /> */}

          {/* <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allFoods?.map((food) => (
                <CarCard food={food} />
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allFoods?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
