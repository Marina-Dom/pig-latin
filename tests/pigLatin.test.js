const { translate } = require('../src/pigLatin');

describe(' ', function (){
    //Define test
    test('Translate pig latin and makes all letter lowercase', function (){
        //Setup test
        const word = "MarinA";

        //Execute function
        const result = translate(word);

        //Evaluate what was executed
        expect(result).toBe("arinamay");
    });
});
