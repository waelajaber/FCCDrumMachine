class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            text: 'Welcome to the Drum Machine'
        }

        this.handleAudio = this.handleAudio.bind(this);
    }


    handleAudio(e) {
        // e.target.children[0].play();
        e.target.children[0].play();
        this.setState(
            { text: e.target.name }
        )
    }

    handleKeyPress(e) {
        document.onkeypress = (e) => {
            let pressedKey = e.key.toUpperCase();
            document.getElementById(pressedKey.toString()).play();
            this.setState(
                { text: document.getElementById(pressedKey.toString()).parentElement.name }
            );
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
                            <button id="sound1" className="drum-pad" name='Hat' onClick={this.handleAudio}>
                                <audio src='./audio/CYCdh_K1close_ClHat-05.wav' className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="Q"></audio>
                                Q
                            </button>
                            <button id="sound2" className="drum-pad" name='Cymbal' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_Flam-05.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="W"></audio>
                                W
                            </button>
                            <button id="sound3" className="drum-pad" name='Kick' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_Kick-08.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="E"></audio>
                                E
                            </button>
                        </div>
                        <div className="Row">
                            <button id="sound4" className="drum-pad" name='Open Hat' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_OpHat-06.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="A"></audio>
                                A
                            </button>
                            <button id="sound5" className="drum-pad" name='Pd Hat' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_PdHat-02.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="S"></audio>
                                S
                            </button>
                            <button id="sound6" className="drum-pad" name='Rim' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_Rim-02.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="D"></audio>
                                D
                            </button>
                        </div>
                        <div className="Row">
                            <button id="sound7" className="drum-pad" name='SdSt' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_SdSt-05.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="Z"></audio>
                                Z
                            </button>
                            <button id="sound8" className="drum-pad" name='Snare Off' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K1close_SnrOff-06.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="X"></audio>
                                X
                            </button>
                            <button id="sound9" className="drum-pad" name='Snare' onClick={this.handleAudio}>
                                <audio src=".\audio\CYCdh_K6-Snr01.wav" className="clip" type='audio/wav'
                                    type='audio/wav' preload='auto' id="C"></audio>
                                C
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app-container'));