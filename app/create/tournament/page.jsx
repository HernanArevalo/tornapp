import styles from './create_tournament.module.css';

export default function CreateTeamPage () {

return (
<div className={styles.container}>
    <h1>CREAR TORNEO</h1>
    <form className={styles.form}>
        <label className={styles.label}>NOMBRE</label>
        <input className={styles.input}></input>
        <label for="yearInput">Año:</label>
        <input className={styles.input} type="number" id="yearInput" name="year" min="1900" max="2100" step="1"></input>
    </form>
</div>
)
}
