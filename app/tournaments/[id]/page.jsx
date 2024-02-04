import Image from 'next/image';
import { tournaments } from '../../../data/tournaments.data.json';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const tournament = tournaments.find(tournament => tournament.id == "12345678")

export const metadata = {
  title: `${tournament.name.toUpperCase()} - TornApp`,
  description: 'Generated by create next app'
}

const fetchTournament = async() => {
  return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
  .then(res => res.json())
}

export default async function TournamentId ({ params }) {
return (
    <>
      <Table className={`text-l font-bold`}>
        <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>EQUIPOS</TableHead>
              <TableHead>PJ</TableHead>
              <TableHead>PG</TableHead>
              <TableHead>PE</TableHead>
              <TableHead>PP</TableHead>
              <TableHead>DG</TableHead>
              <TableHead>PT</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody >
          { tournament.teams.slice(0,15).map((team, idx) =>(
            <TableRow key={team.id} >
              <TableCell >{idx+1}</TableCell>
              <TableCell >
                <div >
                  <Image className="text-right" src={team.team_badge} width="20" height="20" alt=""/>{team.team_name}
                </div>
              </TableCell>
              <TableCell>{team.games}</TableCell>
              <TableCell>{team.games_won}</TableCell>
              <TableCell>{team.games_draw}</TableCell>
              <TableCell>{team.games_lost}</TableCell>
              <TableCell>{`${((team.goals_favor - team.goals_against) >= 0)? '+':'-'}${Math.abs(team.goals_favor - team.goals_against)}`}</TableCell>

              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <BarLoader color="#36d7b7" />
      <BounceLoader
        color="red"
        loading
        speedMultiplier={1}
      /> */}

    </>
  )
}
