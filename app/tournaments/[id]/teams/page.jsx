import styles from './teams.module.css'
import tournamentsData from '../../../../data/tournaments.data.json';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamsPage () {

    const tournament = tournamentsData.tournaments.find(tournament => tournament.id == "12345678")

return (
<div>
<h1>EQUIPOS</h1>
<div className={ styles.teams_list }>
    { tournament.teams.map(team => (
        <Link href={`/teams/${team.team_id}`} key={team.id} className={styles.teamLink}>
        <article className={styles.team_container}>
            <h3 className={ styles.team_name }>{ team.name }</h3>
            <div className={ styles.teamData }>
                <Image src={team.team_badge} alt="team logo" width={64} height={64}/>
                <div className={ styles.teamStats }>
                    <div className={ styles.games }>
                        <span className={ styles.stat_title }>PJ </span>
                        <span className={ styles.stat }>{ team.games } </span>
                    </div>
                    <div className={ styles.games }>
                        <span className={ styles.stat_title }>PG</span>
                        <span className={ styles.stat }>{ team.games_won }</span>
                    </div>
                    <div className={ styles.games }>
                        <span className={ styles.stat_title }>PE</span>
                        <span className={ styles.stat }>{ team.games_draw }</span>
                    </div>
                    <div className={ styles.games }>
                        <span className={ styles.stat_title }>PP</span>
                        <span className={ styles.stat }>{ team.games_lost }</span>
                    </div>
                </div>
                <div className={styles.pointsStats}>
                    <div className={styles.pointStatsChildren}>
                        <div className={styles.pointStatsTitle}>Puntos obtenidos:</div>
                        <div className={styles.data}>
                            <div>{team.games_won*3+team.games_draw}</div>
                            <div>/</div>
                            <div>{team.games*3}</div>
                        </div>
                    </div>
                    <div className={styles.pointStatsChildren}>
                        <div className={styles.pointStatsTitle}>Porcentaje victoria:</div>
                        <div className={styles.data}>
                            <div>{parseFloat( (team.games_won*3+team.games_draw)*100/(team.games*3)).toFixed(2)}</div>
                            <div>%</div>
                        </div>
                    </div>
		        </div>

            </div>
        </article>
        </Link>
    ))

    }
  
</div>

</div>
)
}
