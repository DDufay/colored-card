import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ColoredCard extends Component {
    render() {
        const {color} = this.props;

        return (
            <div className={`color-card ${color}`}>
                <div className='color-card-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ColoredCard;

ColoredCard.propTypes = {
    color: PropTypes.string
};

ColoredCard.defaultProps = {
    color: 'orange-to-macaroni'
};
