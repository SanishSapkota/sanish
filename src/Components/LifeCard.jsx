import React,{useState} from 'react'

const LifeCard = ({Image , Title , Description , Date , Extra, Link}) => {
  return (
    <div className="card new-card border-dark" style={{width: '18rem'}}>
  <img className="card-img-top" src={Image} alt="Card image cap" style={{ width: '100%' }}/>
  <div className="card-body">
    <h5 className="card-title thefont">{Title}</h5>
    <p className="card-text">{Description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item background-new">{Date}</li>
    <li className="list-group-item background-new">{Extra}</li>
  </ul>
  <div className="card-body background-new">
    <a href="#" className="card-link black-text card-text">{Link}</a>
  </div>
</div>
  )
}

export default LifeCard
