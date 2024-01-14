import { teams } from '../../../../data/teams.data.json'
import styles from './players.module.css'


export default function PlayersPage () {

    const team = teams.find(element => element.id == "12345678")

return (
<>
    <h1>JUGADORES</h1>
    <table className={ styles.table}>
        <thead>
            <tr className={ styles.td}>
              <th className={styles.td}></th>
              <th className={styles.td}></th>
              <th className={styles.td}>NOMBRE</th>
              <th className={styles.td}>🟨</th>
              <th className={styles.td}>🟥</th>
              <th className={styles.td}>GOLES</th>
            </tr>
        </thead>
        <tbody className={ styles.td}>
          { team.players.map(pj =>(
            <tr key={team.name} className={ styles.td}>
              <td className={styles.td}></td>
              <td className={styles.td}>{pj.number}</td>
              <td className={styles.td}>
                <div>
                  {pj.name}
                </div>
              </td>
              <td className={styles.td}>{team.overall_league_payed}</td>
              <td className={styles.td}>{team.overall_league_W}</td>
              <td className={styles.td}>{team.overall_league_D}</td>

            </tr>
          ))}
        </tbody>
      </table>
</>
)
}
