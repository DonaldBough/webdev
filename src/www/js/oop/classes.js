/**
 * Create a class `TempTracker`
 *
 * It has two methods:
 *
 *   setTemp: takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *   getTemp: returns the last temperature set by
 *            the setTemp function.
 *
 */

export class TempTracker {
  #temp

  setTemp(inputTemp) { this.#temp = inputTemp }

  getTemp() { return this.#temp }
}

/**
 * Create a class `AverageTempTracker`
 *
 * Offers the same functionality as `TempTracker`
 *
 * Additionally, it implements:
 *
 *   getAverageTemp: returns the average of temps that
 *                   have been set
 *
 */

export class AverageTempTracker extends TempTracker {
  #temps = []
  #temp

  getAverageTemp() {
    let sum = 0;
    this.#temps.map(temp => sum += temp);
    return (sum / this.#temps.length)
  }

  setTemp(inputTemp) {
    super.setTemp(inputTemp);
    this.#temps.push(inputTemp)
  }

  getTemp() { return this.#temp }
}

/**
 * Create a class `BoundedTempTracker`
 *
 * Implements functionality of `TempTracker`
 *
 * Additionally, it implements:
 *      setTemp: same as before, but it does not set the temp
 *               if it is greater than 100 or less than 0.
 *
 *      getTemp: same as before, but it tracks each time
 *               getTemp has been called
 *
 *      getTempReads: returns how many times `getTemp` has
 *                    been called
 *
 */

export class BoundedTempTracker extends TempTracker {
  #temps = []
  #temp
  #getCalls = 0

  setTemp(inputTemp) {
    if (inputTemp > 100 || inputTemp < 0) return;
    super.setTemp(inputTemp);
  }

  getTemp() {
    this.#getCalls++
    return super.getTemp()
  }

  getTempReads() { return this.#getCalls }
}

export class Counter {
  #_counter = 1
  /**
   * Step 1: Rewrite setting the initial state without
   * the `constructor` method.
   */
  // constructor() {
  //   this.counter = 1
  // }

  /**
   * Step 2: rewrite `this.counter` to use a private field
   *         so it can't be accessed outside the class.
   */
  tick() { return this.#_counter++ }
}
