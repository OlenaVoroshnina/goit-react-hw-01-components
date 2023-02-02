import PropTypes from "prop-types";
import StatisticsItem from '../Statistics/StatisticsItem';
import css from './Statistics.module.css';

export default function StatisticsList ({items}) {
    return(
        <ul className={css.statList}>
            {items.map(item => {
                return(
                        <StatisticsItem
                        key={item.id}
                        id = {item.id} 
                        label = {item.label} 
                        percentage = {item.percentage}
                        />        
            )})}
        </ul>
    )
};

StatisticsList.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}