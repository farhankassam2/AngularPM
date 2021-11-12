import { ConvertToSpacesPipe } from './convert-to-spaces-pipe.pipe';

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert given character to space: e.g. N00-01 to N00 01', () => {
    const pipe = new ConvertToSpacesPipe();
    const productCode = 'N00-01';
    const transformedCode = pipe.transform(productCode, '-', ' ');
    expect(transformedCode).toEqual('N00 01');
  })
});
