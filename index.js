
// Built in modules do not get installed bc they're built in. However you do need to IMPORT whatever you want to use from that package
const { inspect } = require('node:util')

// Third party packages HAVE TO BE INSTALLED before we can import that package
const lolcats = require('lolcats')



const veryNestedObject = {
    one: {
      two: {
        three: {
          four: {
            five: "You found the center!",
          },
        },
      },
    },
};
  
// console.log(inspect(veryNestedObject, { depth: Infinity } ));


lolcats.print(veryNestedObject.one.two.three.four.five);