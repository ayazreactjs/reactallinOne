import React, { useEffect, useState } from 'react'
import Tours from './Tours'
const Loading = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>LoAdInG🤣😁🤣</h1>
        </div>
      ) : (
        <Tours />
      )}
    </>
  )
}
export default Loading
