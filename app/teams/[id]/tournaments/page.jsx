import teamsData from '../../../../data/teams.data.json'
import { TournamentCard } from './components/TournamentCard'

export default function TournamentPAge() {

    const team = teamsData.teams.find(element => element.id == "12345678")

return (
<>
<h1>TORNEOS</h1>
{ team.tournaments.map(tournament => (
    <TournamentCard key={tournament.id} tournament={tournament} team={team}/>
))}
</>
)
}
