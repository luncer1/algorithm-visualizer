import './Stripe.css'
type props = {
    value: number,
    selected: boolean
}

function Stripe(props: props) {
  return (
    <div className='stripe' style={{height:`${props.value * 20}px`, backgroundColor: props.selected ? 'blue' : 'green'}}>{props.value}</div>

  )
}

export default Stripe