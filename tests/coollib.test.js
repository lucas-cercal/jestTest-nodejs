const coollib = require('../mylibs/coollib');
 
test('Find the file', () => {
    const result = coollib.findTestTxt();
    expect(result).toBeTruthy();
})