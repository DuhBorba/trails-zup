export function Card({ title, description = '', image, openModal }) {

  function lenghtDescription() {
    if (description.length > 80) {
      return description.substring(0, 80).concat('...');
    }
    return description;
  }

  return (
    <div className="card">
      <div className="card-img" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="content-wrapper">
        <h2 className="title-card">{title}</h2>
        <p className="description-card"> {lenghtDescription()} </p>
        <div className="button-wrapper">
          <button onClick={openModal} className="btn">detalhes</button>
        </div>
      </div>
    </div>
  )
}