import React, { useEffect, useState } from "react";
import "./SortingVisualization.css";
import Stripe from "../stripe/Stripe";

type props = {
  stripeAmount: number;
};

type stripeArrayType = {
  value: number;
  selected: boolean;
  key: number;
};

const stepTime = .1;
const identity = (x: stripeArrayType) => x;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const swapArrayElements = (
  stripeArray: Array<stripeArrayType>,
  setStripeArray: React.Dispatch<React.SetStateAction<stripeArrayType[]>>,
  element1: number,
  element2: number
) => {
  const tempStripeArray = [...stripeArray];
  const temp = tempStripeArray[element1];
  tempStripeArray[element1] = tempStripeArray[element2];
  tempStripeArray[element2] = temp;
  setStripeArray(tempStripeArray);
};

function SortingVisualization(props: props) {
  const [stripeArray, setStripeArray] = useState<stripeArrayType[]>([]);
  const [startingArray, setStartingArray] = useState<stripeArrayType[]>([]);
  const [animationRunning, setAnimationRunning] = useState(false);
  const swapStripes = (element1: number, element2: number) => {
    swapArrayElements(stripeArray, setStripeArray, element1, element2);
  };

  const resetAnimation = () => {
    setStripeArray(startingArray);
  }

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

          swapStripes(j, j + 1);
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
        <button onClick={() => bblSort(stripeArray)} disabled={animationRunning}>Bubble Sort</button>
        <button onClick={() => resetAnimation()} disabled={animationRunning}>Reset</button>

      </div>
    </div>
  );
}

export default SortingVisualization;
