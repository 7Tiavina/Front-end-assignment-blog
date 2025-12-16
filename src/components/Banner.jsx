import { useState } from 'react'
import '../styles/Banner.css'

function Banner({ onPostAdded }) {
  const [showForm, setShowForm] = useState(false)
  const [titre, setTitre] = useState('')
  const [contenu, setContenu] = useState('')
  const [loading, setLoading] = useState(false)

  const submitPoste = (e) => {
    e.preventDefault()

    setLoading(true)

    fetch('http://localhost:8000/api/postes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titre, contenu }),
    })
      .then(() => {
        setTitre('')
        setContenu('')
        setShowForm(false)
        onPostAdded()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="banner-style">
      <h1>Notre site de Blog</h1>

      <button
        className="btn-add"
        onClick={() => setShowForm(!showForm)}
        disabled={loading}
      >
        Ajouter un poste
      </button>

      {showForm && (
        <form className="post-form" onSubmit={submitPoste}>
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              value={titre}
              onChange={e => setTitre(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contenu</label>
            <textarea
              value={contenu}
              onChange={e => setContenu(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Ajout en cours...' : 'Enregistrer'}
          </button>
        </form>
      )}
    </div>
  )
}

export default Banner
