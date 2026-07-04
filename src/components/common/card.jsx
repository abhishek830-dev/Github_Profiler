// // src/components/Card.jsx
// const Card = ({ title, description, link, image, children }) => {
//   return (
//     <div className="card">
//       {image && <img src={image} alt={title} className="card-image" />}
//       {title && <h3>{title}</h3>}
//       {description && <p>{description}</p>}
      
//       {/* Agar humein card ke andar kuch aur custom dikhana ho (jaise stars ya language) */}
//       {children && <div className="card-extra">{children}</div>}
      
//       <Link to={link} className="card-link">View Details</Link>
//     </div>
//   );
// };