import React from 'react';

import transgender from '../icons/transgender.svg';
import transgender_black from '../icons/transgender_black.svg';
import disabled from '../icons/disabled.svg';
import disabled_black from '../icons/disabled_black.svg';

const RestroomDetail = props => {
    
    return (
        <div>
            <div>
                <div>
                    <h3>{props.restroom.name}</h3>
                </div>
                <div>
                    <h4>{props.restroom.street}</h4>
                    <h4>{props.restroom.city}, {props.restroom.state}</h4>
                </div>
                <div>
                    <div>
                        {props.restroom.accessible && <img src={disabled} alt="accessible" /> }
                        {!props.restroom.accessible && <img src={disabled_black} alt="not accessible" />}
                        {props.restroom.unisex && <img src={transgender} alt="unisex" />}
                        {!props.restroom.unisex && <img src={transgender_black} alt="not unisex" />} 
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4>Directions:</h4>
                    {props.restroom.directions !== "" && <p>{props.restroom.directions}</p>}
                    {props.restroom.directions === "" && <p>No directions for this location.</p>}
                </div>
                <div>
                    <h4>Comment:</h4>
                    {props.restroom.comment !== "" && <p>{props.restroom.comment}</p>}
                    {props.restroom.comment === "" && <p>No comment for this location.</p>}
                </div>
            </div>
        </div>
    )
}

export default RestroomDetail;