import type { MenuItem} from "../types"
import { OrderActions } from "../reducers/actionReducer"
type MenuItemProps = {
    item: MenuItem,
    //addItem: (item: MenuItem) => void
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({item,dispatch}:MenuItemProps){
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 hover:scale-103 w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'addItem', payload: {item}})}
        >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
        </button>
    )
}
