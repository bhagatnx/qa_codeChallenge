describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    // here are the two arrays to populate in this test.
    // all littleNumbers entries should be smaller than any bigNumbers entry
    // both arrays should have the same length.
    /* Have added data set group of five numbers for each.*/

    let littleNumbers: Array<number> = [1, 2, 3, 4, 5];
    let bigNumbers: Array<number> = [6,7,8,9,10];

    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "nissin"; // This was replaced with "nissin".
    expect(wordToCheck.split("").reverse().join("")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = true; // Changed to "true"
    expect(val).toBeTruthy();
  });
  test("there is a sequence to this test", () => {
    let values: Array<any> = ["NBA", true, 3]; // Values were added to make a combo Array.
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect(typeof values[i]).toBe("string");
      else if (i == 1) expect(typeof values[i]).toBe("boolean");
      else if (i == 2) expect(typeof values[i]).toBe("number");
      else if (i == 3) expect(values[i]).toBeNull();
      else expect(false).toBe(true);
    }
  });
});
