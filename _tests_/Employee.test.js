
const Employee = require('../lib/Employee')


test("Can create new employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  test("Can get employee ID with getID method", () => {
    const employee = new Employee();
    expect(typeof(employee.getID())).toBe("number");
  });

  test("Can get employee email", () => {
    const employee = new Employee();
    expect(typeof(employee.getEmail())).toBe("string")

  })

  test("Can get employee role", () => {
    const employee = new Employee();
    expect(typeof(employee.getRole())).toBe("string")
  })


  