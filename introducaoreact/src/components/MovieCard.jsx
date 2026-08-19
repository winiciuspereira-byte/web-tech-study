import './MovieCard.css'

function MovieCard({ titulo, ano, genero, nota, children }) {
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2>{titulo}</h2>
        <span className="movie-card__year">{ano}</span>
      </div>

      <div className="movie-card__meta">
        <span className="movie-card__genre">{genero}</span>
        <span className="movie-card__rating">⭐ {nota}</span>
      </div>

      <p className="movie-card__synopsis">{children}</p>
    </div>
  )
}

export default MovieCard
