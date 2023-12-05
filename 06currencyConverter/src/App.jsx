import { useState } from "react";
import InputBox from "./Components/InputBox.jsx";
import Customhook from "/Hooks/Customhook.js";


function App() {
  const [amount, setAmount] = useState(); //This is the officialy setted amount
  const [convertedAmount, setconvertedAmount] = useState(); // This is the converted amount which we get in results.
  const [from, setfrom] = useState("usd"); //This is the state from which we want to chamge.
  const [to, tofrom] = useState("pkr"); //This is the state to which we change value.

  const currencyInfo = Customhook(from); //with this help we use our custom made hook which gets data from api.
  const options = Object.keys(currencyInfo); //this is used to get values from the list of currencies. Object is the component which gets keys(values) from the list.

  const swap = () => {
    setfrom(to); //basically we shaked the value of one function to other function  by using their variables.
    tofrom(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setfrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => tofrom(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <InputBox />
    </>
  );
}

export default App;
