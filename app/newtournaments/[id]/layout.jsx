"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { tournaments } from '../../../data/tournaments.data.json'

import './styles.css'
import styles from './tournament.module.css';


export default function LayoutPage ({ children, params }) {

    const tournament = tournaments.find(element => element.id == "12345678")
    const router = usePathname()

return (
<div className={ styles.TournamentDiv}>
    <h2 className={ styles.tournamentName }>{tournament?.league_name}</h2>


    <div className={ styles.buttons}>
        <Link href={`/tournaments/${params.id}`}>
        <div className={ `${styles.button} ${styles.button} ${(router.endsWith('/fixture') || router.endsWith('/teams'))? 'inactive':'active'}` }>
            TABLA
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/fixture`}>
        <div className={ `${styles.button} ${styles.button} ${router.endsWith('/fixture')? 'active':'inactive'}` }>
            FIXTURE
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/teams`}>
        <div className={ `${styles.button} ${styles.button} ${router.endsWith('/teams')? 'active':'inactive'}` }>
            EQUIPOS
        </div>
        </Link>
    </div>
    { children }
</div>
)
}
