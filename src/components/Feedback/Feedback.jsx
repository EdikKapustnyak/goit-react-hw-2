export default function Feedback({ values, totalFeedback }) {
  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      {totalFeedback > 0 && (
        <p>Positive : {Math.round((values.good / totalFeedback) * 100)}%</p>
      )}
    </>
  );
}
