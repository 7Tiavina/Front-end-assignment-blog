import { useEffect, useState } from 'react'
import Banner from './Banner'
import PosteCard from './PosteCard'
import '../App.css'

function Home() {
  const [postes, setPostes] = useState([])
  const [loading, setLoading] = useState(true)

  const loadPostes = () => {
    setLoading(true)

    fetch('http://localhost:8000/api/allPostes')
      .then(res => res.json())
      .then(data => {
        setPostes(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    loadPostes()
  }, [])

  return (
    <div>
      <Banner onPostAdded={loadPostes} />

      {loading ? (
        <p className="loading">Chargement...</p>
      ) : (
        <div className="postes-container">
          {postes.map(poste => (
            <PosteCard key={poste.id} poste={poste} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
