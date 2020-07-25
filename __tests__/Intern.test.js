const Intern = require('../lib/Intern');

test('Create a manager object', () => {
    const intern = new Intern('Nicolas', 1, 'nico@gmail', 'school');

    expect(intern.school).toEqual(expect.any(String));
});

test('get manager stats as an object', () => {
    const intern = new Intern('Nicolas', 1, 'nico@gmail', 'school');

    expect(intern.getRole()).toEqual(expect.stringMatching('Intern'));
})