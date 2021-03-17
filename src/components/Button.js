import React from 'react';
import PropTypes from 'prop-types';

const Button = (props/*{ textName, BGColor}*/) => {

    return (
        <button onClick={props.onClick} style={{backgroundColor:props.BGColorBGColor}}>{props.textName}</button>
    )
}

Button.defaultProps = {
    textName: 'ToBeAddedLater',
    BGColor: 'greenyellow',
}

Button.propTypes = {
    textName: PropTypes.string.isRequired,
    BGColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;