import React from 'react'
import Title from './Title'
import { toursLink } from '../data'


function arts() {
  return (
    <section className="section" id="arts">
      <Title title='Avaliable' subTitle='arts'/>

      <div className="section-center featured-center">
        {toursLink.map((links)=> {
          const {id,country,date,duration,img,price,text,title} = links
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {country}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>

          )
        })}
      </div>
    </section>
  )
}

export default arts
