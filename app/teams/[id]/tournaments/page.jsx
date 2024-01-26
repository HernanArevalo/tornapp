import styles from './tournaments.module.css'
import { teams } from '../../../../data/teams.data.json'
import tournamentCard from './components/tournamentCard'

export default function TournamentPAge() {

    const team = teams.find(element => element.id == "12345678")
	const lastTournament = team.tournaments[team.tournaments.length -1]



return (
<>
<h1>TORNEOS</h1>
{ team.tournaments.map(tournament => (
    <article className={styles.tournament} key={tournament.id}>
    <h4>{tournament.name}</h4>
    <span> tournament.year </span>

</article>    
))

}
</>

)
}
