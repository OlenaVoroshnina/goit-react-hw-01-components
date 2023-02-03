import PropTypes from "prop-types";
import css from './Statistics.module.css';

function GetRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};


export default function StatisticsItem({id, label, percentage}) {
    return(
        <li className={css.item} key = {id} style = {{backgroundColor: GetRandomHexColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
        
    )
};

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,  
  };