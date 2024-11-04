import './films.scss'
import Title from '../title/Title'
import img1 from '../../assets/film1.webp'
import img2 from '../../assets/film2.jpg'
import img3 from '../../assets/film3.webp'
import img4 from '../../assets/film4.jpg'
import img5 from '../../assets/film5.jpg'
import img6 from '../../assets/film6.jpg'
import img7 from '../../assets/film7.jpg'
import img8 from '../../assets/film8.webp'

export const films = [
    {
        id: 1,
        name: "WELCOME TO OUR NEIGHBORHOOD",
        date: "novemeber 9, 1999",
        img: img6
    },
    {
        id: 2,
        name: "DISASTERPIECES",
        date: "novemeber 26, 2002",
        img: img8
    },
    {
        id: 3,
        name: "VOLIMINAL: INSIDE THE NINE",
        date: "december 5, 2006",
        img: 7
    },
    {
        id: 4,
        name: "of the (sic): YOUR NIGHTMARES, OUR DREAMS",
        date: "september 9, 2009",
        img: img1
    },
    {
        id: 5,
        name: "(SIC)NESSES",
        date: "september 28, 2010",
        img: img2
    },
    {
        id: 6,
        name: "GOAT",
        date: "august 28, 2011",
        img: img3
    },
    {
        id: 7,
        name: "DAY OF THE GUSANDO: LIVE IN MEXICO",
        date: "october 20, 2017",
        img: img4
    },
    {
        id: 8,
        name: "POLLUTION (EXTENDED SHORT FILM)",
        date: "january 14, 2020",
        img: img5
    }
]

const Films = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

export default Films
