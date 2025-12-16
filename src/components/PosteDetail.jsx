import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EditPosteForm from './EditPosteForm'
import '../styles/PosteDetail.css'

function PosteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [poste, setPoste] = useState(null)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/api/postes/${id}`)
      .then(res => res.json())
      .then(data => setPoste(data))
  }, [id])

  const deletePoste = () => {
    fetch(`http://localhost:8000/api/postes/${id}`, {
      method: 'DELETE',
    }).then(() => navigate('/'))
  }

  if (!poste) return <p>Chargement...</p>

  return (
    <div className="poste-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      {!editMode ? (
        <>
          <h1>{poste.title}</h1>
          <p>{poste.content}</p>

          <div className="actions">
            <button
              type="button"
              className="edit-btn"
              onClick={() => setEditMode(true)}
            >
              Modifier
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={deletePoste}
            >
              Supprimer
            </button>
          </div>
        </>
      ) : (
        <EditPosteForm
          poste={poste}
          onCancel={() => setEditMode(false)}
          onUpdated={() => window.location.reload()}
        />
      )}
    </div>
  )
}

export default PosteDetail
