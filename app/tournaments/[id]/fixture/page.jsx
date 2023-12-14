import Link from "next/link";
import styles from '../tournament.module.css';
import tournaments from '../../../../data/tournaments.data.json';

const tournament = tournaments['abc']

console.log(tournament);

export default function FixturePage ({ params }) {

return (
<div>
<h1>FixturePage</h1>

{   tournament.fixture.fechas["1"].map(fecha => (
    <div key={fecha}>{fecha.numero}</div>
))

}
</div>
)
}
