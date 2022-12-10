import React from 'react'
import PropTypes from 'prop-types';
import './CumtomButton.css';

export default function CustomButton({ htext, btext, icon, onClose, onBodyClick }) {
    return (
        <div className='btn-container' onClick={onBodyClick}>
            <div className='text-container'>
                <p className='h-text'>{htext}</p>
                <span> | </span>
                <p className='b-text'>{btext}</p>
            </div>
            <div onClick={onClose}>
                {
                    icon && <img className='logo' src={icon} alt="logo" />
                }
            </div>

        </div>
    )
}

CustomButton.propTypes = {
    htext: PropTypes.string.isRequired,
    btext: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onBodyClick: PropTypes.func.isRequired
};