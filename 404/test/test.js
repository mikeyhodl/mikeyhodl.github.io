console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    // Initial structure. Learner code not match this.
    let structureShouldNotMatch = function() {
      red = [0, 100, 63]
      orange = [40, 100, 60]
      green = [75, 100, 40]
      blue = [196, 77, 55]
      purple = [280, 50, 60]
    };
    
    // Final structure--retain color variables but allow for other color possibilities in letterColors
    let structureShouldMatch = function() {
      red = [$num1, $num2, $num3]
      orange = [$num4, $num5, $num6]
      green = [$num7, $num8, $num9]
      blue = [$num10, $num11, $num12]
      purple = [$num13, $num14, $num15]
    }

    let shouldNotMatch = Structured.match(code, structureShouldNotMatch);
    let shouldMatch = Structured.match(code, structureShouldMatch)
    let failureMessage = 'Did you change any of the values in the color variables?';
    assert.isOk(!shouldNotMatch && shouldMatch, failureMessage);
  });
});