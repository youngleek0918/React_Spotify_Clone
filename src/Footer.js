import React from 'react'
import "./Footer.css";
<<<<<<< HEAD
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
=======
>>>>>>> 89bb1f65daf5f58d9edf484f1bc134e7035c0095

function Footer() {
    return (
        <div className="footer">
<<<<<<< HEAD
            <div className="footer__left">
                {/* <p>Album and song details</p> */}
                <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/DynamiteLogo.png" alt=""
                />
                <div className="footer__songInfo">
                    <h4>Dynamite</h4>
                    <p>BTS</p>
                </div>
            </div>

            <div className="footer__center">
                {/* <p>Player controls</p> */}
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                {/* <p>Volume controls</p> */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div >
=======
            <h1>footer</h1>
        </div>
>>>>>>> 89bb1f65daf5f58d9edf484f1bc134e7035c0095
    )
}

export default Footer
