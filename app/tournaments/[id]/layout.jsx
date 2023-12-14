import Link from "next/link";
import styles from './tournament.module.css';
import tournaments from '../../../data/tournaments.data.json';


const tournament = tournaments['abc']

const fetchTournament = async() => {
    return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
    .then(res => res.json())
  }


export default async function LayoutPage ({ children, params }) {

    const tournament = await fetchTournament();


return (
<div className={ styles.TournamentDiv}>
    <h2 className={ styles.tournamentName }>{tournament[0]?.league_name}</h2>

    <div className={ styles.buttons}>
        <Link href={`/tournaments/${params.id}`}>
        <div className={ styles.TableButton}>
            TABLA
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/fixture`}>
        <div className={ styles.FixtureButton}>
            FIXTURE
        </div>
        </Link>
        <Link href={`/tournaments/${params.id}/teams`}>
        <div className={ styles.TeamsButton}>
            EQUIPOS
        </div>
        </Link>
    </div>{ children }
</div>
)
}
