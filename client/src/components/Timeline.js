//removing the Timeline for later when I give it the right functionality

import React from 'react';

export default function Timeline(props) {
    return (
        <div className="timeline">
            {props.header ? <div className="timeline_header">{props.header}</div> : null}
            <div className="timeline_list">
                {props.children ? <span className="timeline_events_side" /> : <div>No Activity :</div>}
                {props.children}
            </div>
        </div>
    );
}