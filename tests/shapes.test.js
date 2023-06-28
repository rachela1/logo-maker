const Shape = require('../lib/shapes');
var testCases = [
{
    description:"expected to throw error if input is empty.",
    input: {},
    expectedErr: new Error('Must include input.')
},
{
    description:"expected to throw error if more than 3 characters.",
    input: {logoCharacters:'four'},
    expectedErr: new Error('Must be less than 3 characters.')
},
{
    description:"expected to throw error if input is not a valid css color",
    input: {logoCharacters:'Fun', textColor: 'noColor'},
    expectedErr: new Error('Must be valid hexidecimal code or css color.')
},
{
    description:"expected to throw error if render() is called.",
    input:{logoCharacters:'Fun', textColor:'pink', shapeColor:'white'},
    expectedErr: new Error ('render method required for child shapes.'),
    shouldRender:true
},
{
    description:"expected to add shape color if it is a valid color",
    input:{ logoCharacters: 'Fun', textColor:'pink', shapeColor:'white'},
    expectedKey:'shapeColor',
    expectedValue: 'white'
},
{
    description:"expected to add textcolor if it is a valid color",
    input:{ logoCharacters:'Fun', textColor:'pink', shapeColor:'white'},
    expectedKey: "textColor",
    expectedValue: 'white'
},
]

describe("Shape test suite", () => {
    for (let tc of testCases) {
      it(tc.desc, () => {
        if (tc.shouldRender) {
          const shape = new Shape(tc.input);
          expect(shape.render).toThrow(tc.expectedErr);
        } else if (tc.expectedErr) {
          const shape = () => new Shape(tc.input);
          expect(shape).toThrow(tc.expectedErr);
        } else {
          const shape = new Shape(tc.input);
          expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
        }
      });
    }
  });