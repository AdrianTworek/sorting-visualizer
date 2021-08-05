let sortingContainer = document.getElementById('sortingContainer')

const getDigit = (num, idx) => {
  // Convert a number to string to know its length
  let strNum = String(parseFloat(num.style.height))

  let end = strNum.length - 1
  let digit = strNum[end - idx]

  if (digit === undefined) return '0'
  return digit
}

const getDigitsNumber = (arr) => {
  let largest = '0'

  arr.forEach((num) => {
    let strNum = String(parseFloat(num.style.height))

    if (strNum.length > largest.length) {
      largest = strNum
    }
  })

  return largest.length
}

const changeBgColor = (item, digit) => {
  switch (digit) {
    case '0':
      item.style.background = 'crimson'
      break
    case '1':
      item.style.background = 'orange'
      break
    case '2':
      item.style.background = 'yellow'
      break
    case '3':
      item.style.background = 'green'
      break
    case '4':
      item.style.background = 'blue'
      break
    case '5':
      item.style.background = 'indigo'
      break
    case '6':
      item.style.background = 'brown'
      break
    case '7':
      item.style.background = 'turquoise'
      break
    case '8':
      item.style.background = 'gray'
      break
    case '9':
      item.style.background = 'black'
      break
    default:
      break
  }
}

const radixSort = async (arr) => {
  let maxDigits = getDigitsNumber(arr)

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i)
      if (digit !== undefined) {
        buckets[digit].push(arr[j])
      }
    }

    arr = buckets.flat()

    // Update sorting container to change height of the items
    await new Promise((resolve) => {
      setTimeout(() => {
        arr.forEach((item) => {
          // Categorize and change background color of the item based on its current digit
          let digit = getDigit(item, i)
          changeBgColor(item, digit)
          sortingContainer.appendChild(item)
        })

        resolve()
      }, 5000)
    })
  }

  // Once array is sorted (end of external for loop) change color of the items
  await new Promise((resolve) => {
    setTimeout(() => {
      arr.forEach((item) => (item.style.background = 'limegreen'))
      resolve()
    }, 5000)
  })

  return arr
}

export default radixSort
