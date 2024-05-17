"use client";
import  {getGamesByCategory} from "./data/data-utils.js";
import { Banner } from './components/Banner/Banner';
import { Promo } from './components/Promo/Promo';
import { useEffect } from "react";
import { getData } from "./api/api-utils.js";
import { Preloader } from "./components/Preloader/Preloader.jsx";
import { CardsListSection } from "./components/CardsListSection/CardsListSection.jsx";
import { endpoints } from "./api/config.js";
export default function Home() {
  useEffect(() => {
    
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      {popularGames && newGames ? (
        <>
      <CardsListSection id="popular" title="Популярные" data={popularGames} type ='slider' />
      <CardsListSection id="new" title="Новинки" data={newGames}  type = 'slider'/>
      </>
      ) :(
        <Preloader/>
      )}
      <Promo />
    </main>
  );
} 