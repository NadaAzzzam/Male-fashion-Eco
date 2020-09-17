


import React, { Component } from 'react';
import { ColorButton } from '../../../components/UI/Buttons';

class Timer extends Component {

    state = {
        remaining: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        isExpired: false
    };
    // used to set and clear interval
    timer;
    // used to calculate the distance between "current date and time" and the "target date and time"
    distance;
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        const seconds = Math.floor(time / 1000 % 60)
        const minutes = Math.floor(time / 1000 / 60 % 60)
        const hours = Math.floor(time / (1000 * 60 * 60) % 24)
        const days = Math.floor(time / (1000 * 60 * 60 * 24))

        this.setState({ days, hours, minutes, seconds })
    }


    componentDidMount() {
        this.setDate();
        this.counter();
    }

    setDate = () => {
        const { targetDate, targetTime } = this.props,
            // Get todays date and time
            now = new Date().getTime(),
            // Set the date we're counting down to
            countDownDate = new Date(targetDate + " " + targetTime).getTime();

        // Find the distance between now and the count down date
        this.distance = countDownDate - now;

        // target date and time is less than current date and time
        if (this.distance < 0) {
            clearInterval(this.timer);
            this.setState({ isExpired: true });
        } else {
            this.setState({
                remaining: {
                    days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    ),
                    minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((this.distance % (1000 * 60)) / 1000)
                },
                isExpired: false
            });
        }
    };

    counter = () => {
        this.timer = setInterval(() => {
            this.setDate();
        }, 1000);

    };

    render() {
        const { remaining, isExpired } = this.state;

        return (
            <>
                {!isExpired ? (
                    <div className="categories__deal__countdown">
                        <span className="deals">Deal Of The Week</span>
                        <h2><div>Multi-pocket Chest</div>  Bag Black</h2>
                        <div className="categories__deal__countdown__timer">
                            <div className="cd-item">
                                <span>{remaining.days}</span>
                                <p>days</p>
                            </div>
                            <div className="cd-item">
                                <span>{remaining.hours}</span>
                                <p>hours</p>
                            </div>
                            <div className="cd-item">
                                <span>{remaining.minutes}</span>
                                <p>minutes</p>
                            </div>
                            <div className="cd-item">
                                <span>{remaining.seconds}</span>
                                <p>seconds</p>
                            </div>
                        </div>
                        <ColorButton onClick={() => { console.log('hi') }} >Shop Now</ColorButton>

                    </div>
                ) : (
                        <p className="alert-danger">Expired</p>

                    )}
            </>
        );
    }
}


export default Timer;