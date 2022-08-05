const Engineer = require('../lib/Engineer')

test("Can create new engineer", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
  });

  test("Can get engineer ID with getID method", () => {
    const engineer = new Engineer();
    expect(typeof(engineer.getID())).toBe("number");
  });

  test("Can get engineer email with getEmail method", () => {
    const engineer = new Engineer();
    expect(typeof(engineer.getEmail())).toBe("string")
  })

  test("can get role", () => {
    const engineer = new Engineer();
    expect(typeof(engineer.getRole())).toBe("string")
  })

  test("Can get engineer github username with getGithub method", () => {
    const engineer = new Engineer();
    expect(typeof(engineer.getGithub())).toBe("string")
  })