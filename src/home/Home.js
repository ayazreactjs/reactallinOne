import homedata from './homedata'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="mainFlex">
      <div className="subFlex">
        {homedata.map(({ id, image, url, text }) => {
          return (
            <div key={id} className="myBox">
              <Link className="imgBox" to={url}>
                <img src={image} alt={text} />
                <div className="text">
                  <p>{text}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Home
