/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react"
import { OderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/actionReducer"

type OrderTotalsProps = {
    order: OderItem[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotals({order,tip,dispatch}: OrderTotalsProps) {

    const subtotal = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price),0), [order])
    const propina = useMemo(() => subtotal*tip,[tip,order])
    const total = useMemo(() => subtotal+propina,[tip,order])
    return(
        <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal a Pagar: <span className="font-bold">{formatCurrency(subtotal)}</span></p>
            <p>Propina: <span className="font-bold">{formatCurrency(propina)}</span></p>
            <p>Total a Pagar: <span className="font-bold">{formatCurrency(total)}</span></p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10" onClick={() => dispatch({type: 'placeOrder'})}>Guardar Orden</button>
        </>
    )
}