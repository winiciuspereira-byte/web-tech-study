import "./GameCard.css"

const GameCard = (props) => {
  return (
    <article className="game-card">
      <div className="game-card-header">
        <h2 className="game-card-title">{props.title}</h2>
        <span className="game-card-rating">⭐ {props.rating}</span>
      </div>

      <div className="game-card-tags">
        <span className="game-card-tag game-card-genre">{props.genre}</span>
        <span className="game-card-tag game-card-platform">{props.platform}</span>
      </div>

      <div className="game-card-content">
        {props.children}
      </div>
    </article>
  )
}

export default GameCard
