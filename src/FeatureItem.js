import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function FeatureItem (props){
    const feature = props.feature;
    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={props.item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
        </div>
    )
}