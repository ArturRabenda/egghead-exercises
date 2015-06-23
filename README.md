#Exercise 7 : Angular built in filters

##Summary

In this application, you are supposed to use ready-made filter options. You start with a ready list of users.

##Goals

Limit the number of displayed records with the radio choice (default limit should be 15). Afterwards add the ability to sort data by columns names.

Create and use ***reverseSort*** function that sort the data ascending and descending (take a look at **orderBy** documentation).
  
Examples of results:

* set limit to **1**

| Id | User Name | Full Name    | Gender |
|----|-----------|--------------|--------|
| 8  | mbanks7   | Martha Banks | Female |

* type **female** into search inputinput

| Id | User Name  | Full Name        | Gender |
|----|------------|------------------|--------|
| 5  | swatson4   | Shirley Watson   | Female |
| 8  | mbanks7    | Martha Banks     | Female |
| 11 | eturnera   | Elizabeth Turner | Female |
| 14 | aboydd     | Angela Boyd      | Female |
| 15 | farmstronge|Frances Armstrong | Female |


##Setup
You should have installed `npm`, `bower`, `grunt`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals

```
npm start
```

```
grunt test
```

To start unit test run

```
grunt karma
```

###Before you start, please refer to:
* [angularjs-built-in-filters](https://egghead.io/lessons/angularjs-built-in-filters)
* [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

Good luck!
