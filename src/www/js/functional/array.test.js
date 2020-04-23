describe('Array higher-order functions', () => {
  const users = [
    { id: 1, name: 'Andrew', age: 33, favoriteColor: 'blue' },
    { id: 2, name: 'Billy', age: 20, favoriteColor: 'red' },
    { id: 3, name: 'Cynthia', age: 57, favoriteColor: 'green' },
  ]

  describe('#forEach', () => {
    it('rewrite the for loop with forEach', () => {
      const mockFn = jest.fn()

      users.forEach(user => mockFn(user))

      expect(mockFn.mock.calls.length).toEqual(3)
      expect(mockFn.mock.calls).toEqual([
        [users[0]],
        [users[1]],
        [users[2]],
      ])
    })
  })

  describe('#filter', () => {
    it('rewrite the filter operation without a for loop', () => {
      const usersWithFavoriteColorBlue = users.filter(user => user.favoriteColor === 'blue')
      
      expect(usersWithFavoriteColorBlue).toEqual([users[0]])
    })

    it('write a function #reject that does the opposite of #filter and uses that method', () => {
      const reject = (pred, array) => {
        return array.filter(element => !pred(element))
      }

      const usersWithoutFavoriteColorblue = reject(user => user.favoriteColor === 'blue', users)
      expect(usersWithoutFavoriteColorblue).toEqual([users[1], users[2]])
    })
  })

  describe('#every', () => {
    it('implement the #every method', () => {
      // === Uncomment me and implement ===
      Array.prototype.every = function(pred) {
        let res = true;

        this.map(element => {if (!pred(element)) {res = false}})
        return res;
      }
      expect([1, 2, 3].every(x => x > 0)).toEqual(true)
      expect([1, 2, 3].every(x => x > 2)).toEqual(false)
    })
  })

  describe('#some', () => {
    it('implement the #some method', () => {
      // === Uncomment me and implement ===
      // Array.prototype.some = function(pred) {
      //   console.log(this) // access the array with `this`
      // }
      expect([1, 2, 3].some(x => x > 2)).toEqual(true)
      expect([1, 2, 3].some(x => x > 4)).toEqual(false)
    })
  })

  describe('#map', () => {
    it('rewrite using #map', () => {
      const incrementAgeOfHumans = (humans) => {
        const result = []
        for (let i = 0; i < humans.length; i++) {
          result.push({ ...humans[i], age: humans[i].age + 1 })
        }
        return result
      }

      expect(incrementAgeOfHumans(users)).toEqual([
        { id: 1, name: 'Andrew', age: 34, favoriteColor: 'blue' },
        { id: 2, name: 'Billy', age: 21, favoriteColor: 'red' },
        { id: 3, name: 'Cynthia', age: 58, favoriteColor: 'green' },
      ])
    })
  })

  describe('#reduce', () => {
    it('rewrite using reduce', () => {
      const doubleSum = (vals) => vals.reduce((accum, val) => accum + (val * 2), 0)

      expect(doubleSum([1, 2, 3])).toEqual(2 + 4 + 6)
    })

    it('rewrite #flatten using reduce', () => {
      // TIP: Use Array#concat to join two arrays together immutably
      const flatten = (tuples) => {
        return tuples.reduce((result,array) => result.concat(array))
      }

      expect(flatten([[0, 1], [2, 3, 4], [5], []])).toEqual([0, 1, 2, 3, 4, 5])
    })

    it('rewrite #groupByName using reduce', () => {
      const groupByName = (arr) => {
        const groupings = {}
        for (const val of arr) {
          const currentVal = groupings[val] || 0
          groupings[val] = currentVal + 1
        }
        return groupings
      }
      names.reduce()

      const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
      expect(groupByName(names)).toEqual({ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 })
    })
  })
})









