import PropTypes from 'prop-types';
import { StatisticItem, StatisticList } from './Statistics.styled';

export const Statistics = ({
good,
neutral,
bad,
total,
positivePercentage,})=> {
  return (
    <StatisticList>
      <StatisticItem>Good: {good},</StatisticItem>
      <StatisticItem>Neutral: {neutral},</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feetback: {positivePercentage}%</StatisticItem>
    </StatisticList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};