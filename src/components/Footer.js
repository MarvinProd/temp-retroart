import React from 'react'
import { socialLinks,pageLinks } from '../data'

function footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      {pageLinks.map((link)=>{
            return(
                <li key={link.id}>
                <a href={link.href} className="footer-link"> {link.text} </a>
                </li>
            );
        })}
      </ul>
      <ul className="footer-icons">
       {socialLinks.map((link)=> {
            const{id,href,icon} = link
            return(
                <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" className="footer-icon"
                ><i className={icon}></i
          ></a>
        </li>
       )})}
      </ul>
      <p class="copyright">
        copyright &copy; RetroArt company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default footer
