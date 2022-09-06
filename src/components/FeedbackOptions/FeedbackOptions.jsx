import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <div className={s.counter}>
                <div className={s.buttonsContainer}>
                {options.map(option => {
                    return (
                        <button
                            type="button"
                            onClick={() => onLeaveFeedback(option)}
                            key={option}
                            className={s.button}
                        >{option}
                        </button>);
                })}
                </div>
            </div>
        </>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;