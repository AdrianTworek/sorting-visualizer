let sortingContainer = document.getElementById('sortingContainer')

const timeout = () =>
  new Promise((resolve) => setTimeout(resolve, (6000 / speed.value) * 2))

const merge = async (left, right) => {
  let arr = []

  while (left.length && right.length) {
    if (parseFloat(left[0].style.height) < parseFloat(right[0].style.height)) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  arr = [...arr, ...left, ...right]

  await timeout()
  arr.forEach((item) => {
    // Append items and change their background color
    sortingContainer.append(item)
    item.style.background = 'pink'
  })

  return arr
}

const mergeSort = async (arr) => {
  if (arr.length < 2) {
    return arr
  }

  // Find medium index of an array
  const half = arr.length / 2

  // Divide array into 2 halves (left and right)
  const left = arr.splice(0, half)

  return merge(await mergeSort(left), await mergeSort(arr))
}

export default mergeSort
