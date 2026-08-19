import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <h1>Projeto React</h1>

      <div className="movie-list">
        <MovieCard titulo="Interestelar" ano={2014} genero="Ficção Científica" nota={9.2}>
          Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.
        </MovieCard>

        <MovieCard titulo="O Poderoso Chefão" ano={1972} genero="Drama" nota={9.5}>
          A saga da família Corleone e sua ascensão no submundo do crime organizado em Nova York.
        </MovieCard>

        <MovieCard titulo="Vingadores: Ultimato" ano={2019} genero="Ação" nota={8.4}>
          Os heróis remanescentes se unem para desfazer os efeitos causados por Thanos e restaurar o equilíbrio do universo.
        </MovieCard>
      </div>
    </>
  )
}

export default App
