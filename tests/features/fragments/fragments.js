/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        inputs: {
            search: element.bind(null, by.id('search')),
            one: element.bind(null, by.id('one')),
            two: element.bind(null, by.id('two')),
            three: element.bind(null, by.id('three'))
        }, users: {
            table: element.bind(null, by.id('users')),
            id: element.bind(null, by.css('td:nth-of-type(1)')),
            username: element.bind(null, by.css('td:nth-of-type(2)')),
            fullName: element.bind(null, by.css('td:nth-of-type(3)')),
            gender: element.bind(null, by.css('td:nth-of-type(4)')),
            idSort: element.bind(null, by.css('th:nth-of-type(1)')),
            usernameSort: element.bind(null, by.css('th:nth-of-type(2)')),
            fullNameSort: element.bind(null, by.css('th:nth-of-type(3)')),
            genderSort: element.bind(null, by.css('th:nth-of-type(4)'))
        }

    };
    return byString(mapping, text);
};

module.exports = fragments;
