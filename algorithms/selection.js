const timeout = () =>
  new Promise((resolve) => setTimeout(resolve, 20000 / (speed.value * 2)))

const swap = (el1, el2) => {
  let tmp = el1.style.height
  el1.style.height = el2.style.height
  // Element 1 is already sorted so we change its background color
  el1.style.background = 'limegreen'
  el2.style.height = tmp
}

const selectionSort = async (arr, n) => {
  let min_idx

  for (let i = 0; i < n - 1; i++) {
    min_idx = i

    for (let j = i + 1; j < n; j++) {
      if (
        parseFloat(arr[j].style.height) < parseFloat(arr[min_idx].style.height)
      ) {
        min_idx = j
      }
    }

    // Change color of the smallest item in iteration
    arr[min_idx].style.background = 'crimson'

    // Wait and change background color to origin
    await timeout()
    arr[min_idx].style.background = '#00c2ff'

    // Swap elements
    swap(arr[i], arr[min_idx])
    await timeout()
  }

  return arr
}

export default selectionSort
