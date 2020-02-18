function bubbleSort(array) {

  /* your code here */

  for (let i = 0; i < array.length; i++) {

    let currentValue = array[i]
    let nextValue = array[i+1]
    if (currentValue > nextValue) {
      let temp = nextValue
      array[i+1] = currentValue
      array[i] = temp
    }
  }

  return array
}
