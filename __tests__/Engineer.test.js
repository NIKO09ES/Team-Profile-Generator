const Engineer = require('../lib/Engineer');

test('Create a manager object', () => {
    const engineer = new Engineer('Nicolas', 1, 'nico@gmail', 'GithubUser');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get manager stats as an object', () => {
    const engineer = new Engineer('Nicolas', 1, 'nico@gmail', 'GithubUser');

    expect(engineer.getRole()).toEqual(expect.stringMatching('Engineer'));
})