import { useNavigate } from 'react-router-dom'
import '../styles/PosteCard.css'
import blogImage from '../assets/blog.jpg'

function PosteCard({ poste }) {
  const navigate = useNavigate()

  const shortContent =
    poste.contenu.length > 30
      ? poste.contenu.substring(0, 30) + '...'
      : poste.contenu

  return (
    <div
      className="poste-card"
      onClick={() => navigate(`/postes/${poste.id}`)}
    >
      <img src={blogImage} alt="blog" className="poste-image" />
      <h3>{poste.titre}</h3>
      <p>{shortContent}</p>
    </div>
  )
}

export default PosteCard
