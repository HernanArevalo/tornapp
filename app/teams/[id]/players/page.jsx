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
  return 'grey';
};

export default function PlayersPage () {

    const team = teams.find(element => element.id == "12345678")

return (
<>
    <h1>JUGADORES</h1>
    <table className="table">
        <thead>
              <tr className="tr">
              <th className="td"></th>
              <th className="td">POS</th>
              <th className="td"></th>
              <th className="td">NOMBRE</th>
              <th className="td">🟨</th>
              <th className="td">🟥</th>
              <th className="td">GOLES</th>
            </tr>
        </thead>
        <tbody className="td">
          { orderPlayersByColor(team.players.sort((a, b) => a.number - b.number)).map(pj =>(
            <tr key={team.name} className="tr">
              <td className={`col ${getColorClass(pj.position)}`}></td>
              <td className={`td pos`}>{pj.position}</td>
              <td className="td num">{pj.number}</td>
              <td className="td name"> {pj.name}</td>
              <td className="td data">{pj.yellowCards}</td>
              <td className="td data">{pj.redCards}</td>
              <td className="td data">{pj.goalsScored}</td>

            </tr>
          ))}
        </tbody>
      </table>
</>
)
}
