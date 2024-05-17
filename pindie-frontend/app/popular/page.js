'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import {CardsList} from "../components/CardsListSection/CardsList"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return (
      <main className="main-inner">
        {popularGames ? (
          <CardsListSection id="popular" title="Популярные" data={popularGames} type='slider'/>
        ) : (
          <Preloader />
        )}
      </main>
    );
  }