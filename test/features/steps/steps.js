var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I click "([^"]*)"$/, function (name, callback)
    {
        browser.actions().mouseMove(fragments(name)()).perform().then(function ()
        {
            fragments(name)().click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" text in "([^"]*)"$/, function (text, element, callback)
    {
        expect(fragments(element)().getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });
};
