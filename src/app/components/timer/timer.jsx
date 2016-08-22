class Timer extends React.Component {
    constructor(state) {
        super(state);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        return (
            <div className="timer">
                <div className="timer__inner">
                    <span className="timer__digit">{ this.addLeadingZeroes(this.state.hours) }</span>
                    <span className="timer__separator">:</span>
                    <span className="timer__digit">{ this.addLeadingZeroes(this.state.minutes) }</span>
                    <span className="timer__separator">:</span>
                    <span className="timer__digit">{ this.addLeadingZeroes(this.state.seconds) }</span>
                </div>

                <button className="timer__btn timer__btn--start" onClick={ this.start.bind(this) }>Start</button>
                <button className="timer__btn timer__btn--stop" onClick={ this.stop.bind(this) }>Stop</button>
                <button className="timer__btn timer__btn--reset" onClick={ this.reset.bind(this) }>Reset</button>
            </div>
        );
    }

    start() {
        const secsPerMin = 60;
        const minsPerHour = 60;

        let timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });

            if (this.state.seconds === secsPerMin) {
                this.setState({ 
                    minutes: this.state.minutes + 1,
                    seconds: 0
                });     
            }

            if (this.state.minutes === minsPerHour) {
                this.setState({ 
                    hours: this.state.hours + 1,
                    minutes: 0,
                    seconds: 0
                });  
            }
        }, 1000);

        this.setState({
            timer: timer
        });
    }

    stop() {
        clearInterval(this.state.timer);
    }

    reset() {
        this.stop();

        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0
        });
    }

    addLeadingZeroes(num) {
        let numStr = num.toString();

        if (num >= 0 && num < 10) {
            numStr = "0" + numStr;
        }

        return numStr;
    }
}

export default Timer;
