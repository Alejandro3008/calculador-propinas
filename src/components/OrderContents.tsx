import { formatCurrency } from "../helpers"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MenuItem, OderItem } from "../types"
import { OrderActions } from "../reducers/actionReducer"

type OrderContentsProps = {
    order: OderItem[]
    //removeItem: (id: MenuItem['id']) => void
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderContents({order,dispatch} : OrderContentsProps) {
    return (
        <div>
            <h2 className="text-4xl font-black">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-gray-200 py-5 border-y">
                            <div>
                                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                <p className="font-black">Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <div>
                                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={() => dispatch({type: 'removeItem', payload: {id:item.id}})}>X</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
