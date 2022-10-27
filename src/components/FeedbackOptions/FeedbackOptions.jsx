import PropTypes from 'prop-types';
import { FeedbackUL, FeedbackLi, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackUL>
      {options.map(option => (
        <FeedbackLi key={option}>
          <FeedbackBtn
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackBtn>
        </FeedbackLi>
      ))}
    </FeedbackUL>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};