import classNames from 'classnames/bind';
import styles from './SectionPlayer.module.scss';
const cx = classNames.bind(styles);
function SectionPlayer({ player, race }) {
    return (
        <div className={cx('wrapper')}>
            <p>Character {player}</p>
            <div className={cx('character-progress')}>
                {Array.from({ length: race[player - 1] }, (_, i) => (
                    <div key={i} className={cx('node')}></div>
                ))}
            </div>
        </div>
    );
}

export default SectionPlayer;
