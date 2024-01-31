import Image from 'next/image'
import styles from '../[id]/fixture/fixture.module.css'

export default function MatchResume ({match}) {

return (
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
        { match.localteam_score }
        <span>|</span>
        { match.visitorteam_score }
    </div>

    <div className={ styles.teamB }>
        <Image className={styles.teamImg} src={match.visitorteam_badge} width="20" height="20" alt=''/>
        <div className={ styles.teamName }>
            {match.visitorteam}
        </div>
    </div>
        
</div>
)
}