"use client"
import Link from 'next/link'
import styles from './team.module.css'
import teamsData from '../../../data/teams.data.json'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import './styles.css'

export default function LayoutPage ({ children, params }) {

    const team = teamsData.teams.find(element => element.id == "12345678")
    const router = usePathname()

return (
<div className={ styles.TeamDiv}>
    <div className={ styles.teamHead }>
        <Image className={styles.teamImg} src={team.logo_path} width="64" height="64" alt=""/>
        <h2 className={ styles.teamName }>{team.name}</h2>
    </div>

    <div className={ styles.buttons}>
        <Link href={`/teams/${params.id}`}>
        <div className={ `${styles.button} ${(router.endsWith('/players') || router.endsWith('/tournaments'))? 'inactive':'active'}` }>
            GENERAL
        </div>
        </Link>
        <Link href={`/teams/${params.id}/players`}>
        <div className={ `${styles.button} ${router.endsWith('/players')? 'active':'inactive'}` }>
            JUGADORES
        </div>
        </Link>
        <Link href={`/teams/${params.id}/tournaments`}>
        <div className={ `${styles.button} ${router.endsWith('/tournaments')? 'active':'inactive'}` }>
            TORNEOS
        </div>
        </Link>
    </div>
    <div className={ styles.teamContent }>
        { children }
    </div>
</div>
)
}
