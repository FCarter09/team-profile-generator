const Manager = require('../lib/Manager')

test("Can create new manager", () => {
    const supervisor = new Manager();
    expect(typeof(supervisor)).toBe("object");
  });

  test("Can get manager ID with getID method", () => {
    const supervisor = new Manager();
    expect(typeof(supervisor.getID())).toBe("number");
  });

  test("Can get manager email with getEmail method", () => {
    const supervisor = new Manager();
    expect(typeof(supervisor.getEmail())).toBe("string")
  })

  test("can get role", () => {
    const supervisor = new Manager();
    expect(typeof(supervisor.getRole())).toBe("string")
  })

  test("can get office number", () => {
    const supervisor = new Manager();
    expect(typeof(supervisor.getOfficeNumber())).toBe("number")
  })