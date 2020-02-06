import { PrefixPipe } from './prefix.pipe';

describe('PrefixPipe', () => {
  it('Test different cases', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(null, '<')).toMatch('');
    expect(pipe.transform(undefined, '<')).toMatch('');
    expect(pipe.transform('abc', null)).toMatch('abc');
    expect(pipe.transform('abc', undefined)).toMatch('abc');

    expect(pipe.transform('abc', '<')).toMatch('<abc');
  });
});
