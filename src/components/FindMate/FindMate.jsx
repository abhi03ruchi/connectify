import { useState } from "react";
import "./FindMate.css";
import Navbar from "../Navbar/Navbar";
import { gigs } from "../../data";
import GigCard from "../Card/Card";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';


export default function FindMate() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % gigs.length);
    };

    const handleSwipeRight = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? gigs.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="btn">
                <Link to="/" className="a">
                    <ArrowBackRoundedIcon className="arrow" />
                    <h1>Back</h1>
                </Link>
                
            </div>

            <div className="find-container">
                <div className="works" id="works">
                    <div className="container">
                        <GigCard item={gigs[currentCardIndex]} />
                    </div>
                    {/* left  */}
                    <CloseRoundedIcon className="arrow-left" onClick={handleSwipeRight} />
                    {/* right  */}
                    <FavoriteRoundedIcon className="arrow-right" onClick={handleSwipeLeft} />
                </div>
            </div>
            <Footer />
        </>
    );
}
