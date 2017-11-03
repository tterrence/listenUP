import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../../shared/shared_fns.js'
import '../../shared/audio_panel/audio/en_04.mp3'

import '../../shared/audio_panel/img/audio_controls_pause.png'
import '../../shared/audio_panel/img/audio_controls_stop.png'
import '../../shared/audio_panel/img/audio_controls_play.png'
import '../../shared/audio_panel/img/icon_speaker_blue.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Audio_Panel extends React.Component {
    render() {
        return <div className={styles.audio_panel}>

            <div className={classes('audio_player_container', 'flex_container')}>
                <div className={classes('player_img_container')}>
                    <img src='/app/exercises/shared/audio_panel/img/icon_speaker_blue.png' className={classes('player_img')}/>

                    <audio controls preload='auto'>
                        <source src='/app/exercises/shared/audio_panel/audio/en_04.mp3'/>
                        </audio>
                </div>
            </div>

            <div className={classes('audio_controls', 'flex_container')}>
                <img src='/app/exercises/shared/audio_panel/img/audio_controls_play.png' className={styles.audio_button} />
                <img src='/app/exercises/shared/audio_panel/img/audio_controls_pause.png' className={styles.audio_button} />
                <img src='/app/exercises/shared/audio_panel/img/audio_controls_stop.png' className={styles.audio_button} />
            </div>
        </div>
    }
}