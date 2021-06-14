import React, { useState } from 'react';
import classNames from 'classnames';

const RadioButtonGroup = ({ label, className, children, is_title_enabled, is_fiat, item_count, description }) => {
    const [is_currency_selected, setIsCurrencySelected] = useState(false);

    const onCurrencyClicked = () => {
        setIsCurrencySelected(true);
    };
    return (
        <div className={className}>
            {is_title_enabled && (
                <h2
                    className={classNames(`${className}--is-header`, {
                        'currency-selector__is-crypto': !is_fiat,
                    })}
                >
                    {label}
                </h2>
            )}
            <div
                className={classNames('currency-list__items', {
                    'currency-list__items__center': item_count < 4,
                    'currency-list__items__is-fiat': is_fiat,
                    'currency-list__items__is-crypto': !is_fiat,
                })}
                onClick={onCurrencyClicked}
            >
                {children}
            </div>
            {is_fiat && is_currency_selected && <p className='currency-selector__description'>{description}</p>}
        </div>
    );
};

RadioButtonGroup.defaultProps = {
    is_title_enabled: true,
};

export default RadioButtonGroup;