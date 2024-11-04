import './films.scss'
import Title from '../title/Title'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { films } from '../../utils/films'

const Films = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{ background: "rgb(16, 15, 15)" }}
        >
            <div className="logo-film">
                <Title />
            </div>
            <div className="link-wrapper">
                <Link to="/" className="link"> {"- Return home"}</Link>
            </div>
            <div className="films-container">
                {
                    films.map((film) => {
                        return <div className="film" key={film.id}>
                            <img src={film.img} alt={film.name} />
                            <h3>{film.name}</h3>
                            <p>Released: {film.date}</p>
                        </div>
                    })
                }
            </div>
        </motion.div>
    )
}

export default Films
