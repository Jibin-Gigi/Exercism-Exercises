//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (pairs) => {
  let stack = [];
  const bracketPairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  for( let char of pairs) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if ( char === ')' || char === ']' || char === '}' ) {
      let last = stack.pop();
      if (bracketPairs[last] !== char) return false;
    }
  }

  return stack.length === 0;
};
