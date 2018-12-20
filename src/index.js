'use strict';

import React, { Fragment } from 'react';

const newline = '\n';

function nl2br(text) {
    if (typeof text === 'number') {
        return text;
    } else if (typeof text !== 'string') {
        return '';
    }

    let lines = text.split(newline);
    return lines.map(function(line, i) {
        return (
            <Fragment>
                {line}
                <br/>
            </Fragment>
        );
    });
}

module.exports = nl2br;
