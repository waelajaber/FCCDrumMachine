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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome to the Drum Machine'
        }
        this.handleAudio = this.handleAudio.bind(this);
    }

    handleAudio(e) {

    }

    render() {
        return (
            <React.Fragment>
                <div id="drum-machine">
                    <div id="display-container">
                        <div id="display">{this.state.text}</div>
                    </div>
                    <div id="pad-container">
                        <div className="Row">
                            <button id="audio1" className="drum-pad" name='Hat' onClick={this.handleAudio}>
                                Q</button>
                            <button id="audio2" className="drum-pad" name='Cymbal' onClick={this.handleAudio}>
                                W</button>
                            <button id="audio3" className="drum-pad" name='Kick' onClick={this.handleAudio}>
                                E</button>
                        </div>
                        <div className="Row">
                            <button id="audio4" className="drum-pad" name='Open Hat' onClick={this.handleAudio}>
                                A</button>
                            <button id="audio5" className="drum-pad" name='Pd Hat' onClick={this.handleAudio}>
                                S</button>
                            <button id="audio6" className="drum-pad" name='Rim' onClick={this.handleAudio}>
                                D</button>
                        </div>
                        <div className="Row">
                            <button id="audio7" className="drum-pad" name='SdSt' onClick={this.handleAudio}>
                                Z</button>
                            <button id="audio8" className="drum-pad" name='Snare Off' onClick={this.handleAudio}>
                                X</button>
                            <button id="audio9" className="drum-pad" name='Snare' onClick={this.handleAudio}>
                                C</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app-container'));