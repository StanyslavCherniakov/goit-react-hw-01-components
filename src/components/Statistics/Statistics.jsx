import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/colorSwitcher';

console.log(getRandomHexColor());

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(el => {
          return <li key={el.id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    },
  )),

};


