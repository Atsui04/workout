import { useReducer, useState } from "react";
import TabList from "../../components/Plan/Tabs/TabList";
import TabPanel from "../../components/Plan/Tabs/TabPanel";
import styles from "./Plan.module.css";
import { DAYS, today } from "../../constants/days";
import CreateWorkout from "./../../components/Plan/Workouts/CreateWorkout";
import EmptyWorkouts from "./../../components/Plan/Workouts/EmptyWorkouts";
import WorkoutsList from "../../components/Plan/Workouts/WorkoutsList";

const initialState = {
  Monday: {
    mode: "empty",
    exercises: [],
  },
  Tuesday: {
    mode: "empty",
    exercises: [],
  },
  Wednesday: {
    mode: "empty",
    exercises: [],
  },
  Thursday: {
    mode: "empty",
    exercises: [],
  },
  Friday: {
    mode: "empty",
    exercises: [],
  },
  Saturday: {
    mode: "empty",
    exercises: [],
  },
  Sunday: {
    mode: "empty",
    exercises: [],
  },
};

function reducer(state, action) {
  const dayState = state[action.day];

  switch (action.type) {
    case "CREATE_WORKOUT":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "creating",
        },
      };

    case "SUBMIT_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "workouts",
          exercises: [...dayState.exercises, action.payload],
        },
      };

    case "DELETE_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          exercises: dayState.exercises.filter(
            (ex) => ex.id !== action.payload
          ),
          mode: dayState.exercises.length === 1 ? "empty" : dayState.mode,
        },
      };

    case "REST_DAY":
      return {
        ...state,
        [action.day]: {
          mode: "rest",
          exercises: [],
        },
      };

    default:
      return state;
  }
}

const Plan = () => {
  const [activeDay, setActiveDay] = useState(today);
  const [state, dispatch] = useReducer(reducer, initialState);
  const dayState = state[activeDay];

  const handleSelectedDay = (day) => {
    setActiveDay(day);
  };

  return (
    <div>
      <h2 className={styles.h2}>Plan your workouts for a week</h2>
      <TabList
        days={DAYS}
        activeDay={activeDay}
        onSelectedDay={handleSelectedDay}
      />
      <TabPanel>
        {dayState.mode === "empty" && (
          <EmptyWorkouts activeDay={activeDay} dispatch={dispatch} />
        )}

        {dayState.mode === "creating" && (
          <CreateWorkout dispatch={dispatch} activeDay={activeDay} />
        )}

        {dayState.mode === "workouts" && (
          <WorkoutsList
            exercises={dayState.exercises}
            mode="plan"
            dispatch={dispatch}
            activeDay={activeDay}
          />
        )}

        {dayState.mode === "rest" && <p className={styles.rest}>Rest day 😴</p>}
      </TabPanel>
    </div>
  );
};

export default Plan;
