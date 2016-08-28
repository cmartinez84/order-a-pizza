# _TIC-TAC-TOE_

#### _Order a Pizza for Epicodus, Aug 26, 2016_

#### By _**Chris Martinez**_

## Description

_This application allows the user to order a customizable pizza and actively see their price as they modify their selectionr_

## Setup/Installation Requirements

* _Clone this repo from github_
* _Open index.html in browser_

## Known Bugs

_the actual javascript object created by the user intiating a pizza will need a method for making the order decipherable to pizza maker, eg. this program uses negative price values to counteract a user changing their choice options to actively deduct their price. there is also currently no method to prevent a user from sumitting a request for a pizza only if they choose a crust. a user could potentially only select toppings and complete an order_

## Support and contact details

_Feel free to contact Chris at cardamomclouds@yahoo.com_

## Technologies Used

_HTML, CSS, Bootstrap, JQuery, JavaScript_

## Specifications

| Behavior | Input Ex. | Output Ex. |
| --- | --- | --- |
| When a clicks a button, the pizza itializes| ex: user clicks "begin"|a price of $0 displays and user is presented with options|
|all options have prices unique to their option, even if they are the same cost of another| both regular and thing crust are the same price |price does not change when reselecting a size between these two|
|when a user presses an option, the price actively reflects their choice | ex: user presses "anchovies"| the reflected change in price should be $1|
|User is allowed to choose as many toppings, once crust and one size| ex: user cannot choose both "medium" and "large"| but can choose as many toppings as they please| choosing a  different size will result in a change in their selection|
|
|deselecting a topping will also deduct the price from the total listed| ex: user clicks "anchovies" a second time | total will be deducted  by the price of anchovies|

### License


Copyright (c) 2016 **_MIT Licence_**
