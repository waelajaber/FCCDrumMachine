const audio1 = new Audio();
const audio2 = new Audio();
const audio3 = new Audio();
const audio4 = new Audio();
const audio5 = new Audio();
const audio6 = new Audio();
const audio7 = new Audio();
const audio8 = new Audio();
const audio9 = new Audio();

audio1.src = "./audio/CYCdh_K1close_ClHat-05.wav";
audio2.src = "./audio/CYCdh_K1close_Flam-05.wav";
audio3.src = "./audio/CYCdh_K1close_Kick-08.wav";
audio4.src = "./audio/CYCdh_K1close_OpHat-06.wav";
audio5.src = "./audio/CYCdh_K1close_PdHat-02.wav";
audio6.src = "./audio/CYCdh_K1close_Rim-02.wav";
audio7.src = "./audio/CYCdh_K1close_SdSt-05.wav";
audio8.src = "./audio/CYCdh_K1close_SnrOff-06.wav";
audio9.src = "./audio/CYCdh_K6-Snr01.wav";

const audioLib = {
    audio1: audio1,
    audio2: audio2,
    audio3: audio3,
    audio4: audio4,
    audio5: audio5,
    audio6: audio6,
    audio7: audio7,
    audio8: audio8,
    audio9: audio9,
}

const keyToAudioMap = {
    'Q': 'audio1',
    'W': 'audio2',
    'E': 'audio3',
    'A': 'audio4',
    'S': 'audio5',
    'D': 'audio6',
    'Z': 'audio7',
    'X': 'audio8',
    'C': 'audio9'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome to the Drum Machine'
        }
        this.handleAudio = this.handleAudio.bind(this);
    }

    handleAudio(e) {
        audioLib[e.target.id].preload = 'meta';
        audioLib[e.target.id].currentTime = 0;
        audioLib[e.target.id].play();
        this.setState({ text: e.target.name })
    }

    handleKeyPress() {
        document.onkeypress = (e) => {
            let key = e.key.toUpperCase();
            let audioKey = keyToAudioMap[key];
            audioLib[audioKey].preload = 'meta';
            audioLib[audioKey].currentTime = 0;
            audioLib[audioKey].play();
            this.setState(
                { text: document.getElementById(keyToAudioMap[key]).name }
            )

        }
    }

    render() {
        this.handleKeyPress()
        return (
            <React.Fragment>
                <div id="drum-machine">
                    <div id="display-container">
                        <div id="display">{this.state.text}</div>
                    </div>
                    <div id="pad-container">
                        <div className="Row">
                            <button id="audio1" className="drum-pad" key="Q" name='Hat' onClick={this.handleAudio}>
                                Q</button>
                            <button id="audio2" className="drum-pad" key="W" name='Cymbal' onClick={this.handleAudio}>
                                W</button>
                            <button id="audio3" className="drum-pad" key="E" name='Kick' onClick={this.handleAudio}>
                                E</button>
                        </div>
                        <div className="Row">
                            <button id="audio4" className="drum-pad" key="A" name='Open Hat' onClick={this.handleAudio}>
                                A</button>
                            <button id="audio5" className="drum-pad" key="S" name='Pd Hat' onClick={this.handleAudio}>
                                S</button>
                            <button id="audio6" className="drum-pad" key="D" name='Rim' onClick={this.handleAudio}>
                                D</button>
                        </div>
                        <div className="Row">
                            <button id="audio7" className="drum-pad" key="Z" name='SdSt' onClick={this.handleAudio}>
                                Z</button>
                            <button id="audio8" className="drum-pad" key="X" name='Snare Off' onClick={this.handleAudio}>
                                X</button>
                            <button id="audio9" className="drum-pad" key="C" name='Snare' onClick={this.handleAudio}>
                                C</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app-container'));