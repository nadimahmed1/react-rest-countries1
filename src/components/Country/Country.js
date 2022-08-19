import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population } = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>

            {/* ata o holo old system */}
            {/* <h2>Country Name: {props.country.name.common}</h2>
            <h4>Population: {props.country.population}</h4>
            <p><small>Area: {props.country.area}</small></p>
            <p><small>Region: {props.country.region}</small></p> */}
        </div>
    );
};

export default Country;