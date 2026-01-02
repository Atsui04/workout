import ExerciseCard from "./ExerciseCard";
import styles from "./WorkoutDay.module.css";

const WorkoutDay = ({ day, splitType, exercises, onCompleted }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>{day}</h3>
      <p className={styles.p}>{splitType}</p>

      <div className={styles.workouts}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onCompleted={onCompleted}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutDay;
