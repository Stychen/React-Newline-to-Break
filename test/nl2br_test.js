/**
 * Tests are based on https://github.com/yosuke-furukawa/react-nl2br/blob/master/test.js
 */

import nl2br from 'src';
import React, { Fragment } from 'react';
import assert from 'assert';

describe('nl2br', function(){
    it('should parse newlines', function(){
        const result = nl2br('aaa\nbbb\nccc\nddd');
        const expected = [
            <Fragment>
                aaa
                <br/>
            </Fragment>,
            <Fragment>
                bbb
                <br/>
            </Fragment>,
            <Fragment>
                ccc
                <br/>
            </Fragment>,
            <Fragment>
                ddd
                <br/>
            </Fragment>
        ];
        assert.deepEqual(expected, result);
    });
    it('should return numbers', function (){
        const result = nl2br(42);
        const expected = 42;
        assert.deepEqual(expected, result);
    });

    it('should return an empty string if the param is undefined', function () {
        const result = nl2br(undefined);
        const expected = '';
        assert.deepEqual(expected, result);
    });

    it('should return an empty string if the param is null', function () {
        const result = nl2br(null);
        const expected = '';
        assert.deepEqual(expected, result);
    });

    it('should return an empty string if the param is an array', function () {
        const result = nl2br([]);
        const expected = '';
        assert.deepEqual(expected, result);
    });

    it('should return an empty string if the param is an object', function () {
        const result = nl2br({});
        const expected = '';
        assert.deepEqual(expected, result);
    });
});
