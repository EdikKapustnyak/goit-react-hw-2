import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-feedback");
    return savedValues
      ? JSON.parse(savedValues)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  const { good, neutral, bad } = values;
  const totalFeedback = good + neutral + bad;

  function updateFeedback(feedbackType) {
    setValues((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  }

  function resetFeedback() {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback values={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
