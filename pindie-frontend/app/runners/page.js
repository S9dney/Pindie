'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"; 
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
        {runnerGames ? (
          <CardsListSection id="runner" title="Раннеры" data={runnerGames} type='slider' />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }