/// <reference path="../../lib/weather.js" />
/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.min.js" />

/* jslint node: true */
/* global describe, it, expect */

"use strict";





//var weather_lib = require('../../lib/weather');

//describe("#weather", function () {
//    it("returns the correct multiplied value", function () {
//        var result = weather_lib.checkingstring("UKXX77770085");
//        expect(result).toBe("Not in format");
//    });
//});

//var weather_lib = require('../../lib/weather');

describe("checkingstring", function () {
    it("returns the correct value", function () {
        //var result = weather_lib.ICOE.testjas();

        //var icoe = new ICOE;
        //var result = icoe.testjas;
        //console.log("myScore = ", result);
        //beforeEach(module('weather'));
        //var wh = new weather();
        //var result = weather.display;
        debugger;
        expect(display()).toEqual(6);
        //expect(result).toBe(6);
    });

    it('checks if the format is correct', function () {
        var result = checkingstring("UKXX0085");
        expect(result).toBeTruthy();
    });
});

//describe("weather", function () {
//    beforeEach(function () {
//        var result = weather_lib.test1();
//    });


//    it("returns the correct test value", function () {
//        var result = weather_lib.test1();
//        expect(result).toBe(7);
//    });
//});
//var weather_lib = require('../../lib/weather');
////The "describe" function is used to define the functionality which will be tested for the function.
////It takes 2 parameters: The first is the name of the function and next is an anonymous function which will contain the testing code.
//describe("Test Module", function () {

//    //describe("testjas", function () {

//    //    //The it function describes one implementation of a function. The syntax is same as describe: first parameter is the description of the implementation and
//    //    //the second is an anonymous function which will be used to execute the function to test. 
//    //    it("Makes strings into integers", function () {

//    //        //The expect function is the core function which actually tests the return values against the value provided in the toEqual function.
//    //        var result = weather_lib.testjas();
//    //        expect(result).toBe(6);
//    //    });

//    //    //it("Makes floats into integers and rounds them to lower integer", function () {
//    //    //    expect(ModuleToTest.MakeInt(21.3333)).toEqual(21);

//    //    //    expect(ModuleToTest.MakeInt(21.9999)).toEqual(21);
//    //    //});

//    //});



//    //One describe function can be nested inside another. This is particularly great if you want to test modules which have nested functions.
//    describe("MakeInt", function () {

//        //The it function describes one implementation of a function. The syntax is same as describe: first parameter is the description of the implementation and
//        //the second is an anonymous function which will be used to execute the function to test. 
//        it("Makes strings into integers", function () {

//            //The expect function is the core function which actually tests the return values against the value provided in the toEqual function.
//            expect(ModuleToTest.MakeInt("21")).toEqual(21);
//        });

//        //it("Makes floats into integers and rounds them to lower integer", function () {
//        //    expect(ModuleToTest.MakeInt(21.3333)).toEqual(21);

//        //    expect(ModuleToTest.MakeInt(21.9999)).toEqual(21);
//        //});

//    });

//    //describe("Divide", function () {

//    //    it("Divies 2 Integers", function () {
//    //        expect(ModuleToTest.Divide(10, 5)).toEqual(2);
//    //    });

//    //    it("Throws Error if Divided by 0", function () {
//    //        var testErr = function () {
//    //            ModuleToTest.Divide(10, 10);
//    //        };
//    //        //The expect and toThrow functions are used to test if a function throws the proper errors when provided with the wrong input. 
//    //        expect(testErr).toThrow(new Error("Cannot divide by 0"));
//    //    });
//    //});

//    //describe("CreateJQObject", function () {

//    //    it("Creates a JQuery object based on parameters provied", function () {

//    //        var jqObject = ModuleToTest.CreateJQObject("div", "id1", "classOfDiv");

//    //        //Test the object exists.
//    //        expect(jqObject.length).toEqual(1);

//    //        //Test the object is a jquery object. The toBeDefined function is used to determine whether the property is defined.
//    //        expect(jqObject.jquery).toBeDefined();

//    //        //Test the id of the object is equal to the id provided.
//    //        expect(jqObject.attr("id")).toEqual("id1");

//    //        //Test the class of the object is equal to the class provided.
//    //        expect(jqObject.attr("class")).toEqual("classOfDiv");

//    //    });

//    //});
//});