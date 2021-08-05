// Import algorithms
import bubbleSort from '../algorithms/bubble.js'
import selectionSort from '../algorithms/selection.js'
import mergeSort from '../algorithms/merge.js'
import quickSort from '../algorithms/quick.js'
import radixSort from '../algorithms/radix.js'

// Configuration components (range, select inputs, main section container)
const size = document.getElementById('size')
const speed = document.getElementById('speed')
const algorithm = document.getElementById('algorithm')
const sortingContainer = document.getElementById('sortingContainer')

// Buttons
const generateBtn = document.getElementById('generateBtn')
const sortBtn = document.getElementById('sortBtn')

// Dark theme
const darkThemeCheckbox = document.getElementById('darkTheme')

darkThemeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const createSortingItem = () => {
  const item = document.createElement('div')

  item.classList.add('sorting__item')
  item.style.width = `${Math.floor(window.innerWidth / size.value)}px`
  item.style.height = `${
    Math.floor(Math.random() * window.innerHeight * 0.4) + 5
  }px`

  sortingContainer.appendChild(item)
}

const generateArray = () => {
  clearArray()

  for (let i = 0; i < size.value; i++) {
    createSortingItem()
  }
}

const clearArray = () => (sortingContainer.innerHTML = '')

// Generate initial array during site rendering
generateArray()

// Add fade-in animation after generating the test array
sortingContainer.style.animation = 'fade-in 1s ease'

const disableButtons = () => {
  size.disabled = true
  algorithm.disabled = true
  sortBtn.disabled = true
  generateBtn.disabled = true
}

const enableButtons = () => {
  size.disabled = false
  algorithm.disabled = false
  sortBtn.disabled = false
  generateBtn.disabled = false
}

// Event listeners
size.addEventListener('input', generateArray)
algorithm.addEventListener('change', generateArray)
generateBtn.addEventListener('click', generateArray)

sortBtn.addEventListener('click', async () => {
  disableButtons()

  // Store the generated test array items
  let arr = Array.from(sortingContainer.childNodes)
  let n = arr.length

  // Change background color of the items to origin in case of
  // sorting just already sorted array
  arr.map((item) => (item.style.background = '#00c2ff'))

  switch (algorithm.value) {
    case 'bubble':
      await bubbleSort(arr, n)
      break
    case 'selection':
      await selectionSort(arr, n)
      break
    case 'merge':
      arr = await mergeSort(arr)
      break
    case 'quick':
      const quickLegend = document.getElementById('quickLegend')

      // Show quick sort legend
      quickLegend.style.display = 'flex'

      await quickSort(arr, 0, n - 1)

      // Hide quick sort legend
      quickLegend.style.display = 'none'
      break
    case 'radix':
      const radixLegend = document.getElementById('radixLegend')

      // Disable speed input value due to constant animations
      speed.disabled = true

      // Show radix sort legend
      radixLegend.style.display = 'flex'

      await radixSort(arr)

      // Enable speed input
      speed.disabled = false

      // Hide radix sort legend
      radixLegend.style.display = 'none'
      break
    default:
      break
  }

  // Changing background colors of all elements after sorting
  arr.map((item) => (item.style.background = 'limegreen'))

  enableButtons()
})
