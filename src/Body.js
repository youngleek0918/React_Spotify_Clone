import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                {/* <img
                    src="https://i.pinimg.com/564x/ab/ee/ce/abeecee4d179e06f29f343fe43969ba1.jpg"
                    alt=""
                /> */}
                <img
                    src={discover_weekly?.images[0].url}
                    alt=""
                />
                <div className="body__infoText">
                    <strong>PlAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    {/* <p>description...</p> */}
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* List of songs */}
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
