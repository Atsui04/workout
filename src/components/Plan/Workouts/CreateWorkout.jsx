import Button from "../../../ui/Button/Button";
import styles from "./CreateWorkout.module.css";

const CreateWorkout = ({ dispatch }) => {
  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="exercise-name">Enter exercise name: </label>
      <input type="text" id="exercise-name" value={name} />
      <Button onClick={() => dispatch({ type: "EMPTY" })}>Cancel</Button>
    </form>
  );
};

export default CreateWorkout;
