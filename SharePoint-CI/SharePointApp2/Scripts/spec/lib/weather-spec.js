/// <reference path="../../lib/weather.js" />
/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.min.js" />

/* jslint node: true */
/* global describe, it, expect */

"use strict";







describe("checkingstring", function () {
    it("returns the correct value", function () {
        
        debugger;
        expect(display()).toEqual(6);
    });

    it('checks if the format is correct', function () {
        var result = checkingstring("UKXX0085");
        expect(result).toBeTruthy();
    });
});

