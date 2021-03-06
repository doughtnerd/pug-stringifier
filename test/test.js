'use strict';

const chai = require("chai");
const chaiAsPromised = require('chai-as-promised');
const stringy = require("../index");

chai.use(chaiAsPromised);

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('pug-stringifier', function(){
    
    it('should convert a template with context', function(){
        let pathToTemplate = __dirname + '/test1.pug';
        let promise = stringy.stringify(pathToTemplate, {items: ['a', 'b', 'c']});
        return expect(promise).to.eventually.equal(`<div><ul><li>a</li><li>b</li><li>c</li></ul></div>`);
    });
    
    it('should convert a template without context', function(){
        let pathToTemplate = __dirname + '/test1.pug';
        let promise = stringy.stringify(pathToTemplate);
        return expect(promise).to.eventually.equal(`<div><ul></ul></div>`);
    });
    
    it("should not accept relative paths", function () {
        let pathToTemplate = '../test1.pug';
        let prom = stringy.stringify(pathToTemplate, {items: ['a', 'b', 'c']});
        return prom.should.be.rejectedWith("ENOENT: no such file or directory, open '../test1.pug'");
        //return expect(prom).to.be.rejected;
    });
});