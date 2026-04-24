import '../styles/Card.css'

const Card = ({ image_url, game_name }) => {
    return (
        <div className="game-card">
            <img src={image_url} />
            <p>{game_name}</p>
        </div>
    )
}

export default Card