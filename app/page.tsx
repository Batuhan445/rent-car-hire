"use client"
import { CustomFilter, SearchBar, Hero, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Home() {
  const [ allCars, setAllCars] = useState([])
  const [ loading, setLoading ] = useState(false)

  // search states
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  // filter states
  const [first, setFirst] = useState("")
  const [year, setYear] = useState(2020)

  // pagination states
  const [limit, setLimit] = useState(10)

  const getCars = async() => {
    
  }

  useEffect (() => {
    getCars()
  }, [fuels, year, limit, manufacturer, model])
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Sevebileceğiniz arabaları keşfedin</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
            pageNumber = {(searchParams.limit || 10 / 10)}
            isNext = {(searchParams.limit || 10) > allCars.length} 
            />

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, sonuç bulunamadı
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
