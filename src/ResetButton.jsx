import { ResetIcon } from "@radix-ui/react-icons";

// eslint-disable-next-line react/prop-types
export default function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarger.blur();
  };
  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
