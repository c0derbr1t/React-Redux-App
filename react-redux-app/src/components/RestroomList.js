import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { fetchRestrooms } from '../actions';

import RestroomDetail from './RestroomDetail';

import { Span, Quote, Container } from './Styles';


const RestroomList = props => {
    return (
        <div>
            {!props.restrooms && !props.isLoading && (
                <div>
                    <h3>Every person should have the right to use the restroom they need to, regardless of gender identity. Enter a City and/or State (or even part of a place!) above to find up to 50 safe places to pee near you.</h3>
                    <Quote><Span>From <a href='https://www.refugerestrooms.org/about'>REFUGE Restrooms</a>:</Span> "One of the biggest battlefields upon which the fight for transgender rights is taking place daily are restrooms. It seems that every other week a transgender child is made the center of a national news story because they used the restroom assigned to the gender they identify with. Obviously, we believe that every transgender person should have the right to use the restroom they want to. However, we also realize that despite legislative victories in recent years regarding restroom usage, many transgender individuals still face both verbal and physical harassment simply for using the restroom. Nobody should have to face that - and that is why we created REFUGE."</Quote>
                </div>
            )}
            {props.isLoading && (
                <Loader
                type="Circles"
                color="#e6c301"
                height={150}
                width={150}
                // timeout={3000} //3 secs
              /> 
            )}
            <Container>
                {props.restrooms && !props.isLoading && props.restrooms.map(item => (
                        <RestroomDetail key={item.id} restroom={item} />
                ))}
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        restrooms: state.restrooms,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchRestrooms })(RestroomList);