import tournaments from '../../../data/teams.data.json';
import styles from './team.module.css'
import { teams } from '../../../data/teams.data.json'
import Flag from 'react-world-flags'
import Image from 'next/image';


const findScorer = (players) => {
	const player = players.reduce((jugadorActual, jugadorSiguiente) => {
		return jugadorActual.goalsScored > jugadorSiguiente.goalsScored ? jugadorActual : jugadorSiguiente;
	}, {});

	return player
}

export default function TeamPage () {

    const team = teams.find(element => element.id == "12345678")


return (
<section className={styles.teamStats}>
	<div className={styles.background}>
		<Image className={styles.teamImg} src={team.logo_path} width="160" height="160" alt=""/>
	</div >
	<div className={styles.teamContent2}>
		<div>
			<span>Ubicación</span>
			<h3>{team.location}</h3>
		</div>
		<div>
			<span>Fundación</span>
			<h3>{team.foundation}</h3>
		</div>
		<div>
			<span>Desempeño</span>
			<div className={styles.matchesStats}>
				<div className={styles.matchesStat}>
					<span>PJ</span>
					<span>|</span>
					<h5>{team.pj}</h5>
				</div>
				<div className={styles.matchesStat}>
					<span>PG</span>
					<span>|</span>
					<h5>{team.pg}</h5>
				</div>
				<div className={styles.matchesStat}>
					<span>PE</span>
					<span>|</span>
					<h5>{team.pe}</h5>
				</div>
				<div className={styles.matchesStat}>
					<span>PP</span>
					<span>|</span>
					<h5>{team.pp}</h5>
				</div>

			</div>
				
		</div>
		<div className={styles.pointsStats}>
			<div>
				<span>Puntos obtenidos</span>
				<div className={styles.puntosObtenidos}>
					<div>{team.pg*3+team.pe}</div>
					<div>/</div>
					<div>{team.pj*3}</div>
				</div>
			</div>
			<div>
				<span>Porcentaje victoria</span>
				<div className={styles.puntosObtenidos}>
					<div>{parseFloat( (team.pg*3+team.pe)*100/(team.pj*3)).toFixed(2)}</div>
					<div>%</div>
				</div>
			</div>
			
		</div>

		<div className={styles.pointsStats}>
			<div>
				<span>Máxima Victoria</span>
				<div className={styles.puntosObtenidos}>
					{team.maxVictory}
				</div>
			</div>
			<div>
				<span>Máxima derrota</span>
				<div className={styles.puntosObtenidos}>
				{team.maxDefeat}
				</div>
			</div>
			
		</div>

		{team.manager &&	
		<div className={styles.player}>
			<span>Director Técnico</span>
			<div>
				<h3>{team.manager.name}</h3>
				<Flag code="arg" height="16" />
			</div>
		</div>
		}
		<div className={styles.player}>
			<span>Goleador Actual</span>
			<div>
				<h3>{ findScorer(team.players).name }</h3>
				<Flag code="arg" height="16" />
			</div>
			<h3>{ findScorer(team.players).goalsScored }</h3>
		</div>

	</div>
	
</section>

)
}
