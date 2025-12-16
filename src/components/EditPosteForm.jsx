import { useState } from 'react'
import '../styles/EditPosteForm.css'

function EditPosteForm({ poste, onCancel, onUpdated }) {
  const [titre, setTitre] = useState(poste.title)
  const [contenu, setContenu] = useState(poste.content)

  const submitForm = e => {
    e.preventDefault()

    fetch(`http://localhost:8000/api/postes/${poste.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titre, contenu }),
    }).then(() => onUpdated())
  }

  return (
    <form className="edit-form" onSubmit={submitForm}>
      <h2>Modifier l’article</h2>

      <input
        type="text"
        value={titre}
        onChange={e => setTitre(e.target.value)}
      />

      <textarea
        value={contenu}
        onChange={e => setContenu(e.target.value)}
        rows="6"
      />

      <div className="form-actions">
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  )
}

export default EditPosteForm
