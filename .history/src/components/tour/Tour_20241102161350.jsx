import Title from '../title/Title'
import './tour.scss'

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
        id: 3,
        date: "nov 6, 2024",
        location: "Movistar Arena",
        city: "Bogotá, Colombia",
        ticket: "tickets"
    }
]

const Tour = () => {
    return (
        <>
            <Title />
            <div className="tour-container">
                <h1>Upcoming Events</h1>
            </div>
        </>
    )
}

export default Tour
