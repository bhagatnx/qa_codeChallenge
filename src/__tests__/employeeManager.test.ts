import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
     it("can add one more employee", async () => {
      await em.addEmployee();
      await em.selectEmployeeByName("New Employee");
      await em.editEmployee({
        name: "Donald Trump",
        phone: "8009007890",
        title: "President",
      });
      await em.saveChanges();
      await em.selectEmployeeByName("Dollie Berry");
      await em.selectEmployeeByName("Donald Trump");
      let employee = await em.getEmployeeInfo();
      expect(employee.name).toEqual("Donald Trump");
      expect(employee.phone).toEqual("8009007890");
      expect(employee.title).toEqual("President");
      });
    it("cancelling an edit of an employee", async () => {
      await em.selectEmployeeByName("Bernice Ortiz");
      await em.editEmployee({ title: "Player"});
      await em.cancelChanges();
      await em.selectEmployeeByName("Dollie Berry");
      await em.selectEmployeeByName("Bernice Ortiz");
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 1,
        name: "Bernice Ortiz",
        phone: "4824931093",
        title: "CEO",
      });
    });
    it("when editing and then navigating away without saving does not save changes", async () => {
      await em.selectEmployeeByName("Bernice Ortiz");
      await em.editEmployee({ title: "player"});
      await em.selectEmployeeByName("Dollie Berry");
      await em.selectEmployeeByName("Bernice Ortiz");
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 1,
        name: "Bernice Ortiz",
        phone: "4824931093",
        title: "CEO",
        });
      });
    it("going over character requirement for 'name' shows error red line for title", async () => {
      await em.selectEmployeeByName("Bernice Ortiz");
      await em.editEmployee({ name: "Bernicebernicebernicebernicebernice"});
      await em.saveChanges();
      await em.getErrorMessage;
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 1,
        name: "Bernicebernicebernicebernicebernice",
        phone: "4824931093",
        title: "CEO",
      });
    });
    it("going over character requirement for 'name' shows error red line, able to click on different name shows red line", async () => {
      await em.selectEmployeeByName("Bernice Ortiz");
      await em.editEmployee({ name: "Bernicebernicebernicebernicebernice"});
      await em.saveChanges();
      await em.getErrorMessage;
      await em.selectEmployeeByName("Dollie Berry");
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 5,
        name: "Dollie Berry",
        phone: "4873459812",
        title: "Front-End Developer",
      });
    });
  });

  
  