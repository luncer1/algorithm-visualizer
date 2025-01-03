import { useState } from "react";
import "./App.css";
import ButtonMain from "./buttonMain/ButtonMain";
import SortingVisualization from "./sortingVisualization/SortingVisualization";

const renderSwitch = (
  state: string,
  selectionVariable: React.Dispatch<React.SetStateAction<string>>
) => {
  const STRIPE_AMT = 40
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
            disabled={true}
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
            disabled={true}
          />
          <ButtonMain
            name="Radix Sort"
            setVariable={selectionVariable}
            nameVariable="radixSort"
            disabled={true}
          />
          <ButtonMain
            name="Bucket Sort"
            setVariable={selectionVariable}
            nameVariable="bucketSort"
            disabled={true}
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
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Bubble Sort"
          state={state}
        />
      );
    case "selectionSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Selection Sort"
          state={state}
        />
      );
    case "insertionSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Insertion Sort"
          state={state}
        />
      );
    case "mergeSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Merge Sort"
          state={state}
        />
      );
    case "quickSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Quick Sort"
          state={state}
        />
      );
    case "countingSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Counting Sort"
          state={state}
        />
      );
    case "radixSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Radix Sort"
          state={state}
        />
      );
    case "bucketSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Bucket Sort"
          state={state}
        />
      );
    case "heapSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Heap Sort"
          state={state}
        />
      );
    case "shellSort":
      return (
        <SortingVisualization
          stripeAmount={STRIPE_AMT}
          setVariable={selectionVariable}
          algoName="Shell Sort"
          state={state}
        />
      );
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
