import css from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
    <div className={css.statistics}>
        <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>Good: {good}</li>
            <li className={css.statisticsItem}>Neutral: {neutral}</li>
            <li className={css.statisticsItem}>Bad: {bad}</li>
            <li className={css.statisticsItem}>Total: {total}</li>
            <li className={css.statisticsItem}>Positive feedback: {positiveFeedback}%</li>
        </ul>
    </div>  
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,

}
    
export default Statistics;