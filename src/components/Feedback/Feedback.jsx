export default function Feedback({ values, totalFeedback, procentFeedback }) {
  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      {totalFeedback > 0 && (
        <p>Positive : {procentFeedback}%</p>
      )}
    </>
  );
}
  