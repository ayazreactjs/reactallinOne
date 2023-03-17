import { useState } from 'react'
import tourdata from './tourdata'

const Tours = () => {
  const [read, setRead] = useState(false)
  const [tours, setTours] = useState(tourdata)
  const [showPopup, setShowPopup] = useState(false)

  const handleRemoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const handleRefresh = () => {
    setTours(tourdata)
  }

  return (
    <>
      <div className="mainContainer">
        <div>
          <h1>Our Tours</h1>
          <div className="underline"></div>
        </div>
      </div>
      <div className="important">
        <button className="importantBtn" onClick={() => setShowPopup(true)}>
          IMPORTANT
        </button>
        {showPopup && (
          <div className="popup">
            <p>In this project, we are conditionally rendering 3 things:</p>
            <ul>
              <li>
                Using the useState hook to toggle the value of the read state
                variable, and show more/show less button to conditionally
                display the full tour information.
              </li>
              <button className="cancelBtn" onClick={() => setShowPopup(false)}>
                CANCEL
              </button>
              <li>
                Checking the tours.length property to see if the tours array is
                empty or not. If it is empty, it renders a message and refresh
                button using the && operator to conditionally render the
                content.
              </li>
              <li>
                Using the handleRemoveTour function to remove a tour from the
                tours array, which triggers a re-render to show only the
                remaining tours.
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="toursContainer">
        {tours.length === 0 && (
          <div className="centerMe">
            <p> No tours left</p>
            <button className="btn1" onClick={handleRefresh}>
              Refresh
            </button>
          </div>
        )}

        {tours.map((tour) => {
          return (
            <div className="singleTour" key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <div className="price">
                <div style={{ color: '#ff3333' }}>Our Price</div>
                <div>{tour.price}</div>
              </div>
              <div className="centerMe">
                <p>
                  {read ? tour.info : `${tour.info.substring(0, 140)}...`}
                  <button className="readMore" onClick={() => setRead(!read)}>
                    {read ? 'show less' : 'show more'}
                  </button>
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn1"
                  onClick={() => handleRemoveTour(tour.id)}
                >
                  Remove Me
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Tours
