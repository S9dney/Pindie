'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
      <main className="main-inner">
        {pixelGames ? (
          <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} type='slider' />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }