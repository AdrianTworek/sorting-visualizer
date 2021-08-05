const timeout = () =>
  new Promise((resolve) => setTimeout(resolve, 8000 / (speed.value * 2)))

const swap = (el1, el2) => {
  let tmp = el1.style.height
  el1.style.height = el2.style.height
  el2.style.height = tmp
}

const partition = async (arr, l, r) => {
  let pivot = arr[r]
  pivot.style.background = 'magenta'
  let i = l - 1

  for (let j = l; j < r; j++) {
    if (parseFloat(arr[j].style.height) < parseFloat(pivot.style.height)) {
      i++

      // Wait and change background color of the element smaller than the pivot
      await timeout()
      arr[j].style.background = 'crimson'

      // Wait and change background color of the elements to be swapped
      await timeout()
      arr[i].style.background = 'orange'
      arr[j].style.background = 'orange'

      // Wait and change their background color to origin
      await timeout()
      arr[i].style.background = '#00c2ff'
      arr[j].style.background = '#00c2ff'

      // Swap elements
      swap(arr[i], arr[j])
    }
  }

  swap(arr[i + 1], arr[r])
  pivot.style.background = '#00c2ff'
  arr[l].style.background = '#00c2ff'
  return i + 1
}

const quickSort = async (arr, l, r) => {
  if (l >= r) return

  let pivot_idx = await partition(arr, l, r)

  await quickSort(arr, l, pivot_idx - 1)
  await quickSort(arr, pivot_idx + 1, r)

  return arr
}

export default quickSort
