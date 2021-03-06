import notebookImg from '../assets/images/notebook.svg';

import '../styles/banner.scss';

export function Banner() {
  return (
    <section className="container">
      <div className="banner">
        <div className="title">
          <h1>ZUP<span>trails</span></h1>
        </div>
        <div className="img-banner">
          <img src={notebookImg} alt="Notebook" />
        </div>
      </div>
    </section>
  )
}