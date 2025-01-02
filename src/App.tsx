import { useState } from "react";
import "./App.css";
import ButtonMain from "./buttonMain/ButtonMain";
import SortingVisualization from "./sortingVisualization/SortingVisualization";

const renderSwitch = (
  state: string,
  selectionVariable: React.Dispatch<React.SetStateAction<string>>
) => {
  switch (state) {
    case "main":
      return (
        <div className="buttonsContainer">
          <ButtonMain
            name="Bubble Sort"
            setVariable={selectionVariable}
            nameVariable="bubbleSort"
          />
          <ButtonMain
            name="Selection Sort"
            setVariable={selectionVariable}
            nameVariable="selectionSort"
          />
          <ButtonMain
            name="Insertion Sort"
            setVariable={selectionVariable}
            nameVariable="insertionSort"
          />
          <ButtonMain
            name="Merge Sort"
            setVariable={selectionVariable}
            nameVariable="mergeSort"
          />
          <ButtonMain
            name="Quicksort"
            setVariable={selectionVariable}
            nameVariable="quickSort"
          />
          <ButtonMain
            name="Counting Sort"
            setVariable={selectionVariable}
            nameVariable="countingSort"
          />
          <ButtonMain
            name="Radix Sort"
            setVariable={selectionVariable}
            nameVariable="radixSort"
          />
          <ButtonMain
            name="Bucket Sort"
            setVariable={selectionVariable}
            nameVariable="bucketSort"
          />
          <ButtonMain
            name="Heap Sort"
            setVariable={selectionVariable}
            nameVariable="heapSort"
          />
          <ButtonMain
            name="Shell Sort"
            setVariable={selectionVariable}
            nameVariable="shellSort"
          />
        </div>
      );
    case "bubbleSort":
      return <SortingVisualization stripeAmount={30}/>;
    case "selectionSort":
      return <div className="selectionSortContainer" />;
    case "insertionSort":
      return <div className="insertionSortContainer" />;
    case "mergeSort":
      return <div className="mergeSortContainer" />;
    case "quickSort":
      return <div className="quickSortContainer" />;
    case "countingSort":
      return <div className="countingSortContainer" />;
    case "radixSort":
      return <div className="radixSortContainer" />;
    case "bucketSort":
      return <div className="bucketSortContainer" />;
    case "heapSort":
      return <div className="heapSortContainer" />;
    case "shellSort":
      return <div className="shellSortContainer" />;
    default:
      return <div />;
  }
};

function App() {
  const [selection, setSelection] = useState("main");

  return (
    <>
      <div className="mainContainer">
        <div className="titleContainer">
          <p className="title">Algorithm visualizer</p>
        </div>
        {renderSwitch(selection, setSelection)}
      </div>
    </>
  );
}

export default App;
