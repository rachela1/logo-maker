const Shape = require('../lib/shapes');
var testCases = [
{
    description:"expected to throw error if input is empty.",
    input: {},
    expectedErr: new Error('Must include input.'),
},
{
    description:"expected to throw error if more than 3 characters.",
    input: {logoCharacters:'four'},
    expectedErr: new Error('Must be less than 3 characters.'),
},
]