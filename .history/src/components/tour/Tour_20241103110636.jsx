import { motion } from 'framer-motion'
import Title from '../title/Title'
import './tour.scss'
import { Link } from 'react-router-dom';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
        >
            <Title />
            <div className="tour-container">
                <h1>Upcoming Events</h1>
                <Link to="/" className="link"> {"- Return home"}</Link>
                <div className="tour-wrapper">
                    {
                        tour.map((tour) => {
                            return <div key={tour.id}>
                            </div>
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Tour
