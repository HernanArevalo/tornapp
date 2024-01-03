
import Image from 'next/image';
import tournaments from '../../../../data/tournaments.data.json';
import styles from './fixture.module.css'


const fetchTournament = async() => {
    return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
    .then(res => res.json())
  }


  export default async function FixturePage ({ params }) {
      
      const teams = await fetchTournament();
      
      const checkImageUrl = async(url) => {
        if (typeof window !== 'undefined') {
          
          const img = new Image();
          img.src = url
      
          img.onload = function () {
              console.log(url);
              return url
          };
          
          img.onerror = function () {
              console.log('/default_team_badge.svg');
              return '/default_team_badge.svg'
          };
      }}
      
return (
<div>
<h1>FIXTURE</h1>

{   tournaments['abc'].fixture.fechas.map(fecha => (
    <div key={fecha.number} className=''>
        <div className={styles.fechaNumber}>
            {fecha.number}
        </div>
        <div className={ styles.matches }>
        { fecha.matches.map(match => (
            <div key={match.id} className={styles.match}>
                <div className={ styles.time }>
                  {match.hour}
                </div>

                <div className={ styles.teamA }>
                    <div className={ styles.teamName }>
                        {match.localteam}
                    </div>
                    <Image className={styles.teamImg} src={match.localteam_badge || '/default_team_badge.svg'} width="20" height="20" alt=''/>
                </div>

                <div className={ styles.goals }>
                    0
                    <span>|</span>
                    0
                </div>

                <div className={ styles.teamB }>
                    <Image className={styles.teamImg} src={checkImageUrl(match.visitorteam_badge)} width="20" height="20" alt=''/>
                    <div className={ styles.teamName }>
                        {teams[12].team_name}
                    </div>
                </div>
                  
            </div>

        ))

        }
        </div>
    </div>
))

}
</div>
)
}
