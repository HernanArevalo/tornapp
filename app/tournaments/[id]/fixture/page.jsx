import tournamentsData from '../../../../data/tournaments.data.json';
import MatchResume from '../../components/MatchResume';

import styles from './fixture.module.css'


const fetchTournament = async() => {
    return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
    .then(res => res.json())
  }

function sortMatchesByTime(matches) {
const sortedMatches = matches.sort((a, b) => {
    const timeA = new Date(`01/01/2024 ${a.hour}`);
    const timeB = new Date(`01/01/2024 ${b.hour}`);
    return timeA - timeB;
});

return sortedMatches;
}


export default function FixturePage ({ params }) {

    const tournament = tournamentsData.tournaments.find(element => element.id == "12345678")

return (
<div>
<h1>FIXTURE</h1>

{   tournament.fixture.fechas.map(fecha => (
    <div key={fecha.number} className=''>
        <div className={styles.fechaNumber}>
            FECHA {fecha.number}
        </div>
        <div className={ styles.matches }>
        { sortMatchesByTime(fecha.matches).map(match => (
            <MatchResume key={match.id} match={match}/>
        ))

        }
        </div>
    </div>
))

}
</div>
)
}
