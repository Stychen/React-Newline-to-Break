'use strict';

import React from 'react';

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
            <span key={i}>
                {line}
                <br/>
            </span>
        );
    });
}

module.exports = nl2br;