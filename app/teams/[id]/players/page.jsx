import Flag from 'react-world-flags';
import { teams } from '../../../../data/teams.data.json'
import './styles.css'

const colors = {
  "yellow":["PO"],
  "blue":["DFC","LI","LD"],
  "green":["MCD","MC","MCO"],
  "red":["DC","EI","ED"],
}

const positions = ["PO","DFC","LI","LD","MCD","MC","MCO","EI","ED","DC"]

const orderPlayersByColor = (players) => {
  let listOrdered = []

  for(const pos of positions){
    for (const pj of players) {
      if (pj.position == pos) {
        listOrdered.push(pj)
      }
    }
  }
  return listOrdered
};

const getColorClass = (position) => {
  // Mapea la posición a la clase de color correspondiente
  if (colors.yellow.includes(position)) {
    return 'yellow';
  } else if (colors.blue.includes(position)) {
    return 'blue';
  } else if (colors.green.includes(position)) {
    return 'green';
  } else if (colors.red.includes(position)) {
    return 'red';
  }
  // Si la posición no coincide con ninguna categoría de color, puedes devolver una clase predeterminada o manejarlo según tus necesidades.
  return 'white';
};

export default function PlayersPage () {

    const team = teams.find(element => element.id == "12345678")

return (
<div className="players-container">
    <h1>JUGADORES</h1>
    <table className="table">
        <thead>
              <tr className="tr">
              <th className="th"></th>
              <th className="th">POS</th>
              <th className="th"></th>
              <th className="th namecolumn">NOMBRE</th>
              <th className="th">🟨</th>
              <th className="th">🟥</th>
              <th className="th">GOLES</th>
            </tr>
        </thead>
        <tbody className="td">
          { orderPlayersByColor(team.players.sort((a, b) => a.number - b.number)).map(pj =>(
            <tr key={pj.id} className="tr">
              <td className={`col ${getColorClass(pj.position)}`}></td>
              <td className={`td pos`}>{pj.position}</td>
              <td className="td num">{pj.number}</td>
              <td className="td name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <div className="namediv">
                  {pj.name}
                  {/* <Flag code={pj.nationality} height="16" width="24" className="flagPlayer"/> */}
                </div>
              </td>
              <td className="td data">{pj.yellowCards}</td>
              <td className="td data">{pj.redCards}</td>
              <td className="td data">{pj.goalsScored}</td>

            </tr>
          ))}
        </tbody>
      </table>
</div>
)
}
