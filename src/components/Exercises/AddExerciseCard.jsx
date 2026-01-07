import styles from "./AddExerciseCard.module.css";

const AddExerciseCard = ({ dispatch, activeDay }) => {
  const handleClick = () => {
    dispatch({ type: "CREATE_WORKOUT", day: activeDay });
  };

  return (
    <button className={styles.card} onClick={handleClick}>
      <span className={styles.plus}>+</span>
      <span className={styles.text}>Add exercise</span>
    </button>
  );
};

export default AddExerciseCard;
