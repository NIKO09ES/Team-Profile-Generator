const Manager = require('../lib/Manager');

test('Create a manager object', () => {
    let managerOffice = 101
    const manager = new Manager('Nicolas', 1, 'nico@gmail', 101);

    expect(manager.officeNumber).toBe(managerOffice);
});

test('get manager stats as an object', () => {
    let managerRol = 'Manager'
    const manager = new Manager('Nicolas', 1, 'nico@gmail', 101);

    expect(manager.getRole()).toBe(managerRol);;
})