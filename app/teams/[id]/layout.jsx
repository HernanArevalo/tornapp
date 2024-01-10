import Link from 'next/link'
import styles from './team.module.css'
import { teams } from '../../../data/teams.data.json'
import Image from 'next/image'


const fetchTeam = async() => {
    return fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=481770da3abeb3802b4f5fbeafdb2c93faee538ebff7194ba0594a3b81d84fdf')
    .then(res => res.json())
}

export default function LayoutPage ({ children, params }) {

    const team = teams.find(element => element.id == "12345678")

return (
<div className={ styles.TeamDiv}>
    <div className={ styles.teamHead }>
        <Image className={styles.teamImg} src={team.logo_path} width="64" height="64" alt=""/>
        <h2 className={ styles.teamName }>{team.name}</h2>
    </div>


    <div className={ styles.teamContent }>
        <div className={ styles.buttons}>
            <Link href={`/teams/${params.id}`}>
            <div className={ `${styles.button}` }>
                GENERAL
            </div>
            </Link>
            <Link href={`/teams/${params.id}/players`}>
            <div className={ `${styles.button}` }>
                JUGADORES
            </div>
            </Link>
        </div>
        { children }
    </div>
</div>
)
}
