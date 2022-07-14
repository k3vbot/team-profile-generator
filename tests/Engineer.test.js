// TODO Engineer test

const Engineer = require('../lib/Engineer.class');

test('Can set Github account via constructor', () => {
    const testValue = 'Githubuser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'test@test.com', 'Githubuser');
    expect(e.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
    const testValue = 'Githubuser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});
