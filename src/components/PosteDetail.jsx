import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/PosteDetail.css'

function PosteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [poste, setPoste] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8000/api/postes/${id}`)
      .then(res => res.json())
      .then(data => setPoste(data))
  }, [id])

  const deletePoste = () => {
    fetch(`http://localhost:8000/api/postes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  if (!poste) return <p>Chargement...</p>

  return (
    <div className="poste-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        -Retour
      </button>

      <h1>{poste.title}</h1>
      <p>{poste.content}</p>

      <button className="delete-btn" onClick={deletePoste}>
        Supprimer l’article
      </button>
    </div>
  )
}

export default PosteDetail
