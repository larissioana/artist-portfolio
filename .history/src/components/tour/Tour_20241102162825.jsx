import Title from '../title/Title'
import './tour.scss'
import img from '../../assets/tileable-wood-1920x1080.png'

const tour = [
    {
        id: 1,
        date: "nov 2, 2024",
        location: "Knotfest Chile",
        city: "Santiago Chile",
        ticket: "tickets"
    },
    {
        id: 2,
        date: "nov 5, 2024",
        location: "Movistar Arena",
        city: "Bogotá, Colombia",
        ticket: "tickets"
    },
    {
        id: 3,
        date: "nov 6, 2024",
        location: "Movistar Arena",
        city: "Bogotá, Colombia",
        ticket: "tickets"
    },
    {
        id: 4,
        date: "nov 8, 2024",
        location: "Calle 2",
        city: "Zapopan, Mexico",
        ticket: "tickets"
    },
    {
        id: 5,
        date: "nov 9, 2024",
        location: "Parque Bicentenario",
        city: "Mexico City, Mexico",
        ticket: "tickets"
    },
    {
        id: 6,
        date: "dec 5, 2024",
        location: "Ziggo Dome",
        city: "Amsterdam, Netherlands",
        ticket: "tickets"
    },
    {
        id: 7,
        date: "dec 6, 2024",
        location: "Westfalenhallen",
        city: "Dortmund, Germany",
        ticket: "tickets"
    },
    {
        id: 8,
        date: "dec 8, 2024",
        location: "Schleyerhalle",
        city: "Stuttgart, Germany",
        ticket: "tickets"
    },
    {
        id: 9,
        date: "dec 9, 2024",
        location: "Quarterback Immobilien Arena",
        city: "Leipzig, Germany",
        ticket: "tickets"
    },
    {
        id: 10,
        date: "dec 11, 2024",
        location: "Hallenstadion",
        city: "Zürich, Schwitzerland",
        ticket: "tickets"
    },
    {
        id: 11,
        date: "dec 12, 2024",
        location: "Accor Arena",
        city: "Paris, France",
        ticket: "tickets"
    },
];

const Tour = () => {

    return (
        <div>
            <Title />
            <div className="tour-container">
                <h1>Upcoming Events</h1>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {
                                tour.map((event) => (
                                    <tr key={event.id}>
                                        <td style={{ borderBottom: '1px solid black', padding: '10px', fontSize: "1.1REM" }}>
                                            <div style={{
                                                textTransform: "uppercase"
                                            }}>{event.date}</div>
                                            <div>{event.location}</div>
                                        </td>
                                        <td style={{ borderBottom: '1px solid white', padding: '10px' }}>{event.city}</td>
                                        <td style={{ borderBottom: '1px solid white', padding: '10px', textTransform: "uppercase" }}>{event.ticket}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tour
