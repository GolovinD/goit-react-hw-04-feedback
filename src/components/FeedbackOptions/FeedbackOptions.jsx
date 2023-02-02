import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   
    return (
        <div className={css.btns}>  
            {options.map(option => {
            return (
                <button
                    className={css.btn}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                    key={option}
                >{option}
                </button>
            );})}
        </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;