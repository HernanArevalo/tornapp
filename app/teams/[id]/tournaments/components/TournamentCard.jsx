import Link from "next/link";
import styles from '../tournaments.module.css'


export default function TournamentCard ({tournament, team}) {

    
return (
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
    <div>
        <span>Desempeño:</span>
        <div className={styles.matchesStats}>
            <div className={styles.matchesStat}>
                <span>PJ</span>
                <span>|</span>
                <span>{tournament.games}</span>
            </div>
            <div className={styles.matchesStat}>
                <span>PG</span>
                <span>|</span>
                <span>{tournament.games_won}</span>
            </div>
            <div className={styles.matchesStat}>
                <span>PE</span>
                <span>|</span>
                <span>{tournament.games_draw}</span>
            </div>
            <div className={styles.matchesStat}>
                <span>PP</span>
                <span>|</span>
                <span>{tournament.games_lost}</span>
            </div>
        </div>
	</div>
    <div>
        <span>Goles:</span>
        <div className={styles.goalsStats}>
            <div className={styles.goalsStat}>
                <span>DG</span>
                <span>|</span>
                <span>{`${((tournament.goals_favor - tournament.goals_against) >= 0)? '+':'-'}${Math.abs(tournament.goals_favor - tournament.goals_against)}`}</span>
            </div>
        </div>
        <div className={styles.goalsStats}>
            <div className={`${styles.goalsStat} ${styles.green}`}>
                <span>GF</span>
                <span>|</span>
                <span>{tournament.goals_favor}</span>
            </div>
            <div className={`${styles.goalsStat} ${styles.red}`}>
                <span>GC</span>
                <span>|</span>
                <span>{tournament.goals_against}</span>
            </div>
        </div>

	</div>
</article>    
</Link>
)
}
