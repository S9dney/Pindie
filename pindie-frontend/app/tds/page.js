'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
        {tdsGames ? (
          <CardsListSection id="TDS" title="TDS" data={tdsGames} type='slider' />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }