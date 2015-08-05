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
        bookTitle: element.bind(null, by.css('book book-title')),
        bookTitleContent: element.bind(null, by.css('book book-title strong')),
        bookDescription: element.bind(null, by.css('book book-description')),
        bookDescriptionContent: element.bind(null, by.css('book book-description div')),
        bookPages: element.bind(null, by.css('book book-pages')),
        bookPagesContent: element.bind(null, by.css('book book-pages span'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
