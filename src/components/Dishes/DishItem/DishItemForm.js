import Button from "../../UI/Buttons/Button";
import { useRef, useState } from "react";

const DishItemForm = ({ selectedShop, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 23
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "";
  };

  return (
    <form className="flex flex-col space-y-4 basis-34" onSubmit={submitHandler}>
      <div className="flex items-center justify-end space-x-2">
        <div className="font-semibold">Quantity:</div>
        <input
          ref={amountInputRef}
          className="w-6/12 text-center font-semibold rounded-lg"
          min="0"
          max="23"
          step="1"
          type="number"
        />
      </div>
      <Button className="py-2 px-8" disabled={!selectedShop}>+ Add</Button>
      {!amountIsValid && <p className="text-xs italic">Please enter a valid amount (1 - 23).</p>}
    </form>
  );
};

export default DishItemForm;
