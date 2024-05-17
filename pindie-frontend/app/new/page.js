'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="new" title="Новинки" data={newGames} type='slider'/>
        ) : (
          <Preloader />
        )}
      </main>
    );
  }