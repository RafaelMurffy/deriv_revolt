import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import React from 'react';
import { FastMarker } from 'Modules/SmartChart';

const ChartMarker = ({ marker_config, marker_content_props, is_bottom_widget_visible }) => {
    const { ContentComponent, ...marker_props } = marker_config;

    // TODO:
    //  - rename x to epoch
    //  - rename y to price
    const onRef = ref => {
        if (ref) {
            // NOTE: null price means vertical line.
            if (!marker_props.y) {
                const margin = (is_bottom_widget_visible ? 115 : 0) + 24; // digit contracts have a widget at the bottom // height of line marker icon

                ref.div.style.height = `calc(100% - ${margin}px)`;
                ref.div.style.zIndex = '-1';
            }
            ref.setPosition({
                epoch: +marker_props.x,
                price: +marker_props.y,
            });
        }
    };

    // memoizing the marker components data:
    const getMemoizedComponent = React.useCallback(() => {
        return <ContentComponent {...toJS(marker_content_props)} />;
    }, [marker_content_props]);

    return <FastMarker markerRef={onRef}>{getMemoizedComponent()}</FastMarker>;
};

ChartMarker.propTypes = {
    is_bottom_widget_visible: PropTypes.bool,
    marker_config: PropTypes.object,
    marker_content_props: PropTypes.object,
};

export default ChartMarker;
