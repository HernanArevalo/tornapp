
import tournaments from '../../../../data/tournaments.data.json';
import styles from './fixture.module.css'
import MatchResume from '../../components/MatchResume';


const fetchTournament = async() => {
    return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
    .then(res => res.json())
  }


export default function FixturePage ({ params }) {
      
    const tournament = tournaments['abc']

return (
<div>
<h1>FIXTURE</h1>

{   tournament.fixture.fechas.map(fecha => (
    <div key={fecha.number} className=''>
        <div className={styles.fechaNumber}>
            FECHA {fecha.number}
        </div>
        <div className={ styles.matches }>
        { fecha.matches.map(match => (
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
