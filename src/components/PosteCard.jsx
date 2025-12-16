import '../styles/PosteCard.css'
import blogImage from '../assets/blog.jpg'

function PosteCard({ poste }) {
  return (
    <div className="poste-card">
      <img src={blogImage} alt="blog" className="poste-image" />

      <h3>{poste.titre}</h3>
      <p>{poste.contenu}</p>
    </div>
  )
}

export default PosteCard
