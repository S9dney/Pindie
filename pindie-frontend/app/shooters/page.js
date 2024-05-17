'use client';
import {  useGetDataByCategory } from "@/app/api/api-hooks"
import {getGamesByCategory} from "../data/data-utils"
import {CardsList} from "../components/CardsListSection/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";



export default function New() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
      <main className="main-inner">
        {shooterGames ? (
          < CardsListSection id="shooter" title="Шутеры" data={shooterGames} type='slider' />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }