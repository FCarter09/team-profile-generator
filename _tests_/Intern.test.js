const Intern = require('../lib/Intern')

test("Can create new intern", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Can get intern ID with getID method", () => {
    const intern = new Intern();
    expect(typeof(intern.getID())).toBe("number");
});

test("Can get intern email with getEmail method", () => {
    const intern = new Intern();
    expect(typeof(intern.getEmail())).toBe("string")
});

test("can get role", () => {
    const intern = new Intern();
    expect(typeof(intern.getRole())).toBe("string")
});

test("Can get intern school with getSchool method", () => {
    const intern = new Intern();
    expect(typeof(intern.getSchool())).toBe("string")
});