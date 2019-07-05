import React, {Component} from 'react';
import ColoredCard from './ColoredCard';

class Demo extends Component {
    render() {
        return (
            <div className="flex-container">
                <ColoredCard>
                    <h1 className="card-title">Color Card</h1>
                    <p className="card-text">
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est, Caesar sciens quod si cessaveris, et tuas et palatii tui
                        auferri iubebo prope diem annonas. hocque solo contumaciter dicto subiratus abscessit nec in
                        conspectum eius postea venit saepius arcessitus.
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                    </p>
                    <button className="beauty-btn"> See More</button>
                </ColoredCard>

                <ColoredCard color='cosmic-fusion'>
                    <h1 className="card-title">Color Card</h1>
                    <p className="card-text">
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est, Caesar sciens quod si cessaveris, et tuas et palatii tui
                        auferri iubebo prope diem annonas. hocque solo contumaciter dicto subiratus abscessit nec in
                        conspectum eius postea venit saepius arcessitus.
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                    </p>
                    <button className="beauty-btn"> See More</button>
                </ColoredCard>

                <ColoredCard color='orange-to-macaroni'>
                    <h1 className="card-title">Color Card</h1>
                    <p className="card-text">
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est, Caesar sciens quod si cessaveris, et tuas et palatii tui
                        auferri iubebo prope diem annonas. hocque solo contumaciter dicto subiratus abscessit nec in
                        conspectum eius postea venit saepius arcessitus.
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                        proficiscere inquit ut praeceptum est
                        Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter
                    </p>
                    <button className="beauty-btn"> See More</button>
                </ColoredCard>

                <ColoredCard color="sweat-morning">
                    <h1 className="card-title">Color Card</h1>
                    <img className="beauty-img" src="https://placeimg.com/640/480/any?t=1562358006051" alt="img" />
                    <button className="beauty-btn"> See More</button>
                </ColoredCard>
            </div>
        );
    }
}

export default Demo;
