import styles from './teams.module.css'
import tournamentsData from '../../../../data/tournaments.data.json';
import Image from 'next/image';

export default function TeamsPage () {

    const tournament = tournamentsData.tournaments.find(tournament => tournament.id == "12345678")

return (
<div>
<h1>EQUIPOS</h1>
<div className={ styles.teams_list }>
    { tournament.teams.map(team => (
        <div className={styles.team_container} key={team.id}>
        <div className={ styles.teamData }>
            <Image src={team.team_badge} alt="team logo" width={64} height={64}/>
            <h3 className={ styles.h3 }> { team.name } </h3>
        </div>
        <div className={ styles.teamStats }>
            <span className={ styles.h3 }> { team.games } </span>
            <span className={ styles.h3 }> { team.games_won } </span>
            <span className={ styles.h3 }> { team.games_draw } </span>
            <span className={ styles.h3 }> { team.games_lost } </span>
        </div>
        </div>

    ))

    }
  
</div>

</div>
)
}
