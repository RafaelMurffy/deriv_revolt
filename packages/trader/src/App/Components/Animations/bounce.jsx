import PropTypes from 'prop-types';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const BounceUp = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
            default: {
                duration: 300,
            },
        },
    },
    exit: {
        y: 35,
        opacity: 0,
        transition: {
            duration: 0,
        },
    },
});

const Bounce = ({ children, className, is_visible, keyname }) =>
    is_visible ? (
        <PoseGroup>
            <BounceUp className={className} key={keyname}>
                {children}
            </BounceUp>
        </PoseGroup>
    ) : null;

Bounce.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    is_visible: PropTypes.bool,
    keyname: PropTypes.string,
};

export { Bounce };
