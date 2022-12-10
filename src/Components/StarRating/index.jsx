import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './StarRating.css';

function StarRating({ count, element }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const rate = useMemo(() => (
        Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map(value => (
                <button
                    key={value}
                    className={value <= (hover || rating) ? 'on' : 'off'}
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHover(value)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <span className="star">{element}</span>
                </button>
            ))
    ), [count, rating, hover, element])

    return (
        <div>
            {rate}
        </div>
    )
}

StarRating.propTypes = {
    count: PropTypes.number,
    element: PropTypes.string
}

export default StarRating
