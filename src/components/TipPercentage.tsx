import { OrderActions } from "../reducers/actionReducer"
const tipOptions = [
    {
        id:'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id:'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id:'tip-50',
        value: .50,
        label: '50%'
    }
]

type TipPercentageProps = {
    tip:number,
    dispatch: React.Dispatch<OrderActions>
}
export default function TipPercentage ({tip,dispatch}: TipPercentageProps) {
    return(
        <div>
            <h3 className="font-black text-2xl"></h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input id={tipOption.id} type="radio" name="tip" value={tipOption.value} onChange={e => dispatch({type: 'defienTip', payload: {value: +e.target.value}})} checked={tipOption.value===tip}></input>
                    </div>
                ))}
            </form>
        </div>
    )
}