import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];
/*switch case testing*/
describe("Calculator", () => {});
  dataset.forEach((calcul) => {
    test(`the ${calcul.method} method with ${calcul.x} and ${calcul.y}`, () => {
      switch (calcul.method) {
        case "add":
          expect(calculator.add(calcul.x, calcul.y)).toEqual(calcul.x + calcul.y);
          break;
        case "subtract":
          expect(calculator.subtract(calcul.x, calcul.y)).toEqual(calcul.x - calcul.y);
          break;
        case "multiply":
          expect(calculator.multiply(calcul.x, calcul.y)).toEqual(calcul.x * calcul.y);
          break;
        case "divide":
          expect(calculator.divide(calcul.x, calcul.y)).toEqual(calcul.x / calcul.y);
          break;
        default:
          console.log("there is no matching calculation type");
      }
    });
    //another switch method test
      switch (calcul.method) {
        case "add":
          expect(calculator.add(calcul.x,calcul.y)).toBe(calcul.x + calcul.y);
          break;
        case "subtract":
          expect(calculator.subtract(calcul.x,calcul.y)).toBe(calcul.x - calcul.y);
          break;
        case "multiply":
          expect(calculator.multiply(calcul.x,calcul.y)).toBe(calcul.x * calcul.y);
          break;
        case "divide":
            expect(calculator.divide(calcul.x,calcul.y)).toBe(calcul.x / calcul.y);
            break;  
              default:
                  null;
      }
  });
  