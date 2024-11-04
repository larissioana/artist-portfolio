import { motion } from 'framer-motion'
import Title from '../title/Title'
import './tour.scss'
import { Link } from 'react-router-dom';
import { tour } from '../../utils/tour';
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
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {
                                tour.map((event) => (
                                    <tr key={event.id}>
                                        <td style={{ padding: '1rem', fontSize: "1.2rem" }}>
                                            <div style={{
                                                textTransform: "uppercase"
                                            }}>{event.date}</div>
                                            <div>{event.location}</div>
                                        </td>
                                        <td style={{ padding: '10px' }}>{event.city}</td>
                                        <td className="ticket" style={{ padding: '10px', textTransform: "uppercase" }}>{event.ticket}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}

export default Tour
