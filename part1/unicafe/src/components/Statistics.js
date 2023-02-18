
const Statistic = ({text, value}) => {
  return ( /* <p>{text} {value}</p>; */
    <tr>
      <td> {text} </td> 
      <td> {value} </td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) => {
  const totalFeedback = good + neutral + bad;
  if (totalFeedback === 0) {
    return <div>No feedback given</div>;
  }

  const averageScore = (good - bad) / totalFeedback;
  const positivePercentage = (good / totalFeedback) * 100 + " %";

  return (
    <table>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} /> 
    <Statistic text="all" value={totalFeedback} />
    <Statistic text="average" value={averageScore} />
    <Statistic text="positive" value={positivePercentage} />
    </table>
  )
}

export default Statistics;