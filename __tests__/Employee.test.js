const Employee = require('../lib/Employee');

test('Create a employee object', () => {
    const employee = new Employee('Nicolas', 1, 'nico@gmail');

    expect(employee.name).toBe('Nicolas');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee stats as an object', () => {
    const employee = new Employee('Nicolas', 1, 'nico@gmail');

    expect(employee.getName()).toEqual(expect.stringContaining('Nicolas'));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'));
})