"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

import tournamentsData from '../../../data/tournaments.data.json'

import styles from './tournament.module.css';


export default function LayoutPage ({ children, params }) {

    const tournament = tournamentsData.tournaments.find(element => element.id == "12345678")
    const router = usePathname()

return (
<div className={ styles.TournamentDiv}>
    <h2 className={ styles.tournamentName }>{tournament.name}</h2>


    <div className={ styles.buttons}>
        <Link href={`/tournaments/${params.id}`}>
        <div className={ `${styles.button} ${styles.button} ${(router.endsWith('/fixture') || router.endsWith('/teams'))? styles.inactive:styles.active}` }>
            TABLA
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/fixture`}>
        <div className={ `${styles.button} ${styles.button} ${router.endsWith('/fixture')? styles.active:styles.inactive}` }>
            FIXTURE
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/teams`}>
        <div className={ `${styles.button} ${styles.button} ${router.endsWith('/teams')? styles.active:styles.inactive}` }>
            EQUIPOS
        </div>
        </Link>
    </div>
    { children }
</div>
)
}
