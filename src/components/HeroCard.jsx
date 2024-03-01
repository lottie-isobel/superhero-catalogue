import PropTypes from "prop-types";

export default function HeroCard({hero}) {
    HeroCard.propTypes = {hero: PropTypes.object.isRequired}
    
    return (
        <div className="grid-item">
            <img src={hero.images["md"]} alt={hero.name}/>
            <br/>
            {hero.name}
        </div>
    );
}
