const pauseBtn = document.getElementById('pauseBtn')

const timeout = () =>
  new Promise((resolve) => setTimeout(resolve, 5000 / (speed.value * 2)))

const swap = (el1, el2) => {
  let tmp = el1.style.height
  el1.style.height = el2.style.height
  el2.style.height = tmp
}

const bubbleSort = async (arr, n) => {
  let isSorted = false
  let counter = 0

  do {
    isSorted = true

    for (let i = 0; i < n - counter - 1; i++) {
      // Change background color of the elements to be compared
      arr[i].style.background = 'crimson'
      arr[i + 1].style.background = 'crimson'

      // Wait and change their background color to origin
      await timeout()
      arr[i].style.background = '#00c2ff'
      arr[i + 1].style.background = '#00c2ff'

      // Convert to float numbers and compare heights of both elements
      if (
        parseFloat(arr[i].style.height) > parseFloat(arr[i + 1].style.height)
      ) {
        // Swap elements
        swap(arr[i], arr[i + 1])
        await timeout()

        isSorted = false
      }
    }
    counter++

    // Change background color of the last (already sorted) element
    arr[n - counter].style.background = 'limegreen'
  } while (!isSorted)

  return arr
}

export default bubbleSort
