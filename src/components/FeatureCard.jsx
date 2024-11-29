
import PropTypes from 'prop-types';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="card-container">
            <div className="icon">{icon}</div>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    );
};


FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureCard;