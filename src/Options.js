import React from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';


export default function Options(props) {
    return Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
                return <FeatureItem itemHash={itemHash} item={item} feature={feature} selected={props.selected} updateFeature={props.updateFeature}/>;
        });

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    });
}