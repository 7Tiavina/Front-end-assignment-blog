import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/PosteDetail.css'

function PosteDetail() {
  const { id } = useParams()
  const [poste, setPoste] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8000/api/postes/${id}`)
      .then(res => res.json())
      .then(data => setPoste(data))
  }, [id])

  if (!poste) return <p>Chargement...</p>

  return (
    <div className="poste-detail">
      <h1>{poste.title}</h1>
      <p>{poste.content}</p>
    </div>
  )
}

export default PosteDetail
