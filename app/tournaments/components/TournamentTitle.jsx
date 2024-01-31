import styles from '../tournament.module.css';

const fetchTournament = async() => {
  return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
  .then(res => res.json())
}

export default async function TournamentTitle() {

  const tournament = await fetchTournament();

  return (
    <h2 className={ styles.tournamentName }>{tournament[0]?.league_name}</h2>
  )
}