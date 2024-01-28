import styles from './tournaments.module.css'
import { teams } from '../../../../data/teams.data.json'
import tournamentCard from './components/tournamentCard'
import Link from 'next/link'

export default function TournamentPAge() {

    const team = teams.find(element => element.id == "12345678")
	const lastTournament = team.tournaments[team.tournaments.length -1]



return (
<>
<h1>TORNEOS</h1>
{ team.tournaments.map(tournament => (
<Link href={`/tournaments/${tournament.id}`} key={tournament.id}>
<article className={styles.tournament}>
    <div className={styles.tournamentTop}>
        <h4 className={styles.h4}>{tournament.name}</h4>
        { tournament.playing ?
        <div className={styles.playing}>
            PLAYING
        </div>
        :
        <div className={styles.finished}>
            FINISHED
        </div>
        }
    </div>    
    <span> {tournament.year} </span>
    <div className={styles.tournamentData}>
				Posición: 
                <span className={styles.position}>{ tournament.position }°</span>
	</div>
</article>    
</Link>
))

}
</>
)
}
