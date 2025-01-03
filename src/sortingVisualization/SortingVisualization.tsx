import React, { useEffect, useState } from "react";
import "./SortingVisualization.css";
import Stripe from "../stripe/Stripe";

type props = {
  stripeAmount: number;
  setVariable: React.Dispatch<React.SetStateAction<string>>;
  algoName: string;
  state: string;
};

type stripeArrayType = {
  value: number;
  selected: boolean;
  key: number;
};

const stepTime = 0.1;
const identity = (x: stripeArrayType) => x;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function SortingVisualization(props: props) {
  const [stripeArray, setStripeArray] = useState<stripeArrayType[]>([]);
  const [startingArray, setStartingArray] = useState<stripeArrayType[]>([]);
  const [animationRunning, setAnimationRunning] = useState(false);

  const resetAnimation = () => {
    setStripeArray(startingArray.map(identity));
  };

  const selectStripe = (stripe: number) => {
    setStripeArray(
      stripeArray.map((item, index) =>
        index === stripe
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  async function bblSort(arr: Array<stripeArrayType>) {
    setAnimationRunning(true);
    for (let i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (let j = 0; j < arr.length - i - 1; j++) {
        selectStripe(j);
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j].value > arr[j + 1].value) {
          // If the condition is true
          // then swap them

          selectStripe(j);
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        await sleep(stepTime * 1000);
      }
    }
    setAnimationRunning(false);
  }

  async function selectionSort(arr: Array<stripeArrayType>) {
    setAnimationRunning(true);
    // To get length of array
    const n = arr.length;

    // Variable to store index of smallest value
    let min;

    // variables to iterate the array
    let i, j;

    for (i = 0; i < n - 1; ++i) {
      min = i;
      selectStripe(i);
      for (j = i + 1; j < n; j++) {
        if (arr[j].value < arr[min].value) min = j;
        selectStripe(j);
        await sleep(stepTime * 1000);
      }
      selectStripe(min);
      await sleep(stepTime * 1000);
      // Swap if both index are different
      if (min != i) {
        [arr[min], arr[i]] = [arr[i], arr[min]];
      }
      selectStripe(i);
      await sleep(stepTime * 1000);
    }
    setAnimationRunning(false);
  }

  async function insertionSort(arr: Array<stripeArrayType>) {
    setAnimationRunning(true);
    for (let i = 1; i < arr.length; i++) {
      selectStripe(i);
      // Choosing the first element in our unsorted subarray
      const current = arr[i];
      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current.value < arr[j].value) {
        selectStripe(j + 1);
        arr[j + 1] = { ...arr[j] };
        arr[j + 1].key = Math.random();
        j--;

        await sleep(stepTime * 1000);
      }
      arr[j + 1] = current;
      selectStripe(j + 1);
      await sleep(stepTime * 1000);
    }
    setAnimationRunning(false);
  }

  function merge(left: Array<stripeArrayType>, right: Array<stripeArrayType>) {
    const sortedArr: Array<stripeArrayType> = []; // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0].value < right[0].value) {
        const val = left.shift();
        if (val != undefined) {
          sortedArr.push(val);
        }
      } else {
        const val = right.shift();
        if (val != undefined) {
          sortedArr.push(val);
        }
      }
    }
    console.log(sortedArr)
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
  }

  function mergeSort(arr: Array<stripeArrayType>): Array<stripeArrayType> {
    // Base case
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    // Recursive calls
    const left: Array<stripeArrayType> = mergeSort(arr.slice(0, mid));
    const right: Array<stripeArrayType> = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  async function partition(arr: Array<stripeArrayType>, low: number, high: number) { 
    const pivot = arr[high]; 
    let i = low - 1; 
  
    for (let j = low; j <= high - 1; j++) { 
        // If current element is smaller than the pivot
        if (arr[j].value < pivot.value) { 
            // Increment index of smaller element 
            selectStripe(i);
            await sleep(stepTime * 1000);
            i++;
            
            
            selectStripe(j);
            await sleep(stepTime * 1000); 
            // Swap elements 
            [arr[i], arr[j]] = [arr[j], arr[i]];
            selectStripe(i);
            await sleep(stepTime * 1000);  
        }
    } 
    // Swap pivot to its correct position 
    selectStripe(high);
    await sleep(stepTime * 1000); 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
    selectStripe(i+1);
    await sleep(stepTime * 1000); 
    return i + 1; // Return the partition index 
} 
  
async function quickSort(arr: Array<stripeArrayType>, low: number, high:number) { 
    if (low >= high) return; 
    const pi = await partition(arr, low, high); 
    await quickSort(arr, low, pi - 1); 
    await quickSort(arr, pi + 1, high); 
} 

  const selectAlgo = () => {
    switch (props.state) {
      case "bubbleSort":
        return () => bblSort(stripeArray);
      case "selectionSort":
        return () => selectionSort(stripeArray);
      case "insertionSort":
        return () => insertionSort(stripeArray);
      case "mergeSort":
        return () => mergeSort(stripeArray);
      case "quickSort":
        return () => quickSort(stripeArray,0, stripeArray.length-1);
      case "countingSort":
        return () => bblSort(stripeArray);
      case "radixSort":
        return () => bblSort(stripeArray);
      case "bucketSort":
        return () => bblSort(stripeArray);
      case "heapSort":
        return () => bblSort(stripeArray);
      case "shellSort":
        return () => bblSort(stripeArray);
      default:
        return () => console.error("Invalid sort");
    }
  };

  useEffect(() => {
    const newArray: stripeArrayType[] = [];

    for (let i = 0; i < props.stripeAmount; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 30) + 1,
        selected: false,
        key: i,
      });
    }

    setStripeArray(newArray.map(identity));
    setStartingArray(newArray.map(identity));
  }, [props.stripeAmount]);

  return (
    <div className="sortingContainer">
      <div className="algoName">
        <p>{props.algoName}</p>
      </div>
      <div className="stripesContainer">
        {stripeArray.map((element) => {
          return (
            <Stripe
              value={element.value}
              selected={element.selected}
              key={element.key}
            />
          );
        })}
      </div>
      <div className="guiContainer">
        <button
          className="button-89"
          onClick={() => selectAlgo()()}
          disabled={animationRunning}
        >
          Sort
        </button>
        <button
          className="button-89"
          onClick={() => resetAnimation()}
          disabled={animationRunning}
        >
          Reset
        </button>
        <button className="button-89" onClick={() => props.setVariable("main")}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default SortingVisualization;
