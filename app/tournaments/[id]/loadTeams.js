import tournaments from '../../../data/tournaments.json';

export default async function loadTeams (id) {
    let teams = await tournaments[id].teams

    return teams.sort((a, b) => b.points - a.points)
  }