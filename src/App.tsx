/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import OrderTotals from "./components/OrderTotals";
import useOrder from "./hooks/useOrder";
import TipPercentage from "./components/TipPercentage";
import logo from "../src/images/pngwing.com.png"
import { useReducer } from "react";
import { actionReducer, initialState } from "./reducers/actionReducer";

function App() {

  //const {order,tip,setTip,addItem,removeItem,placeOrder} = useOrder()
  const [state,dispatch] = useReducer(actionReducer, initialState) 
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black ">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 p-5">
            {menuItems.map(item => (
              <MenuItem
              key={item.id}
              item={item}
              dispatch = {dispatch}
              />
            ))}
          </div>
        </div>
        <div className="">
          <OrderContents
            order={state.order}
            dispatch = {dispatch}
          />
          {state.order.length > 0 ?(
            <>
              <TipPercentage tip={state.tip} dispatch={dispatch}/>
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch}/>
            </>
          )
          : <img className="h-auto max-w-lg mx-auto" src={logo}/> }
        </div>
      </main>
    </>
  )
}

export default App
