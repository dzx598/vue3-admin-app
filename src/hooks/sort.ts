// 常见排序算法

/**
 * 冒泡
 */
export function bubbleSort(array: Array<number>) {
  const lenght = array.length
  for (let i = 0; i < lenght; i++) {
    const element = array[i]
    for (let j = 0; j < lenght - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
/**
 * 冒泡改进版  2 1 3 6 4 7 5 =>  1 2 3 4 6 5 7(p) => 1 2 3 4 5 6(p) 7
 * 设置一个标志性变量pos，用于记录每趟排序中最后一次进行交换的位置，由于pos位置之后的记录均已交换到位，故在进行下一趟排序是只要扫描到pos位置即可
 */
export function bubbleSortAd1(array: Array<number>) {
  let i = array.length - 1
  while (i > 0) {
    let p = 0
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
        p = j
      }
    }
    i = p
  }
  return array
}

/** low = 0  height = length - 1 = 6
 * 冒泡排序终极 2 1 3 8 4 7 5 => 4 9 3 4 8 5 7 h=5
 * 传统冒泡排序中的每一趟排序操作只能找到一个最大值或者最小值，我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一可以得到里那个个最终值（最大及最小），从而使排序趟数至少减少一半
 */
export function bubbleSortFin(array: Array<number>) {
  const low = 0
  let high = array.length - 1
  while (low < high) {
    for (let j = low; j < high; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
    --high
  }
  return array
}
/**
 * 快速排序（Quick Sort）
 * 快速排序的基本思想是：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序
 */
export const QuickSort = (array: Array<number>): any => {
  if (array.length <= 1) return array
  const pivotIndex = parseInt(array.length / 2 + "")
  const pivot = Number(array.splice(pivotIndex, 1))
  const left = []
  const right = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return QuickSort(left).concat([pivot]).concat(QuickSort(right))
}
/**
 * 快速排序（Quick Sort）方法2
 * 其中 left = 0; right = array.length-1
 */
