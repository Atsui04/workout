import Button from "../../../ui/Button/Button";
import styles from "./CreateWorkout.module.css";

const CreateWorkout = ({ dispatch }) => {
  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.p}>Create a workout:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="exercise-name">
            Enter exercise name:{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            id="exercise-name"
            placeholder="Peck-deck..."
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="exercise-sets">
            Choose the number of sets:{" "}
          </label>
          <input
            className={styles.input}
            type="number"
            min={1}
            id="exercise-sets"
          />
          {/* <select className={styles.select}>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1} className={styles.option}>
                {i + 1}
              </option>
            ))}
          </select> */}
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="exercise-reps">
            Enter number of reps:{" "}
          </label>
          <input
            className={styles.input}
            type="number"
            min={1}
            id="exercise-reps"
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="exercise-weight">
            Enter weights(in kg):{" "}
          </label>
          <input
            className={styles.input}
            type="number"
            min={1}
            id="exercise-weight"
          />
        </div>
        <div className={styles.buttons}>
          <Button type="submit" size="lg">
            Submit
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => dispatch({ type: "EMPTY" })}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkout;
