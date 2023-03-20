import React from 'react'
import aboutImg from '../images/about.jpg'
import Title from './Title'

function about() {
  return (
    <section className="section" id="about">
      <Title title='about' subTitle='us'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          Teaching kids the Expression and application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power
          </p>
          <p>
          Teaching subjects of study primarily concerned with human creativity and social life, such as languages, literature, and history
          </p>
          <a href="#home" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default about
