import React from 'react';

import transgender from '../icons/transgender.svg';
import transgender_black from '../icons/transgender_black.svg';
import disabled from '../icons/disabled.svg';
import disabled_black from '../icons/disabled_black.svg';

import { Outer, Left, Right, Name, Address, AddressH4, Icons } from './Styles';

const RestroomDetail = props => {
    
    return (
        <Outer>
            <Left>
                <Name>
                    <h3>{props.restroom.name}</h3>
                </Name>
                <Address>
                    <AddressH4>{props.restroom.street}</AddressH4>
                    <AddressH4>{props.restroom.city}, {props.restroom.state}</AddressH4>
                </Address>
                    <div>
                        {props.restroom.accessible && <Icons src={disabled} alt="accessible" /> }
                        {!props.restroom.accessible && <Icons src={disabled_black} alt="not accessible" />}
                        {props.restroom.unisex && <Icons src={transgender} alt="unisex" />}
                        {!props.restroom.unisex && <Icons src={transgender_black} alt="not unisex" />} 
                    </div>
            </Left>
            <Right>
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
            </Right>
        </Outer>
    )
}

export default RestroomDetail;