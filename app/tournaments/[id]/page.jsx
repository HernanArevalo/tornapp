import Image from 'next/image';
import { tournaments } from '../../../data/tournaments.data.json';
import styles from './tournament.module.css';
import Link from 'next/link';

const tournament = tournaments.find(tournament => tournament.id == "12345678")

export const metadata = {
  title: `Torneo - ${tournament.name.toUpperCase()}`,
  description: 'Generated by create next app'
}

const fetchTournament = async() => {
  return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
  .then(res => res.json())
}

export default async function TournamentId ({ params }) {
  
  return (
    <>
      <table className={ styles.table}>
        <thead className={ styles.thead}>
            <tr className={ styles.tr}>
              <th className={ styles.th }></th>
              <th className={ styles.th }>EQUIPOS</th>
              <th className={ styles.th }>PJ</th>
              <th className={ styles.th }>PG</th>
              <th className={ styles.th }>PE</th>
              <th className={ styles.th }>PP</th>
              <th className={ styles.th }>PT</th>
            </tr>
        </thead>
        <tbody className={ styles.tbody }>
          { tournament.teams.slice(0,15).map((team, idx) =>(
            <tr key={team.id} className={styles.tr}>
              <td className={styles.td}>{idx+1}</td>
              <td className={ styles.td}>
                <div className={ styles.tD}>
                  <Image className={styles.teamImg} src={team.team_badge} width="20" height="20"/>
                  {team.team_name}
                </div>
              </td>
              <td className={ `${styles.td} ${styles.dataLight}` }>{team.games}</td>
              <td className={ `${styles.td} ${styles.dataLight}` }>{team.games_lost}</td>
              <td className={ `${styles.td} ${styles.dataLight}` }>{team.games_draw}</td>
              <td className={ `${styles.td} ${styles.dataLight}` }>{team.goals_favor}</td>
              <td className={ styles.td }>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <BarLoader color="#36d7b7" />
      <BounceLoader
        color="red"
        loading
        speedMultiplier={1}
      /> */}

    </>
  )
}
