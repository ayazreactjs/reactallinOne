import { useContext } from 'react'
import { ThemeContext } from './theme'
const Component1 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="myTheme" style={{ backgroundColor: theme.backgroundColor }}>
      <button
        className="btn"
        onClick={toggleTheme}
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
      >
        ToggleTheme
      </button>
      <p
        style={{
          color: theme.color,
          textAlign: 'justify',
          maxWidth: '500px',
          padding: '10px',
        }}
      >
        Lorem ipsum{' '}
        <span style={{ color: theme.spanColor }}>
          Span Color Change with Toggle,
        </span>
        consectetur adipisicing elit. Dolorum natus, mollitia voluptatem tempore
        id, tempora incidunt eveniet reprehenderit a, itaque error vero sequi
        ducimus provident reiciendis repellat saepe facilis autem?
      </p>
    </div>
  )
}
export default Component1
