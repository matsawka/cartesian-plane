Project Title: Comcast Assignment
Author: Mateusz Sawka
Date: 04.08.2019

Execute: npm run solution

Input your (x,y) coordinates and results will display in terminal

Packages:
ESLint: for linting

I'm using the fomula to compute distance as:
distance = the square root of (json coordinate x - input coordinate x)squred + (json coordinate y - input coordinate y)squared;

Testing with Jasmine would include:
describe(inputs)
: make sure the x and y inputs are numbers

describe(coordinates.json)
: should be defined
: should have length greater than 0
: should be in correct format

describe(output json)
: should have length greater than 0
: should be in correct format

describe(test coordinates) 
: should have correct output coordinates


