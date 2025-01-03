import "./Stripe.css";
type props = {
  value: number;
  selected: boolean;
};

function Stripe(props: props) {
  return (
    <div
      className="stripe"
      style={{
        height: `${props.value * 20}px`,
        backgroundColor: props.selected
          ? "rgb(129, 129, 194)"
          : "rgb(50, 50, 90)",
      }}
    >
      {props.value}
    </div>
  );
}

export default Stripe;
