export function Card({ title, description = '', image, openModal }) {

  function lenghtDescription() {
    if (description.length > 80) {
      return description.substring(0, 80).concat('...');
    }
    return description;
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="Trilha" />
      </div>
      <h2 className="title-card">{title}</h2>
      <p className="description-card"> {lenghtDescription()} </p>
      <div className="button">
        <button onClick={openModal} className="btn">detalhes</button>
      </div>
    </div>
  )
}