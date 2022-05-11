import {ReactComponent as StarFull} from 'assets/star_full.svg';
import {ReactComponent as StarHalf} from 'assets/star_half.svg';
import {ReactComponent as StarEmpty} from 'assets/star_empty.svg';
import './style.css';
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );

}

export default MovieStars;