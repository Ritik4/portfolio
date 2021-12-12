import React from 'react'
import './footer.css';
function footer() {
    return (
        <div className="footer_wrapper">

             <ul className="social_icons container flex">
                <li><a href="https://www.google.com"><i className="fab fa-2x fa-twitter"></i></a></li>
                <li><a href="https://www.google.com"><i className="fab fa-2x fa-linkedin-in"></i></a></li>
                <li><a href="https://www.google.com"><i className="fab fa-2x fa-instagram"></i></a></li>
             </ul>

             <div className="copyright">
                 <span>copyright <i className="fas fa-copyright"></i> 2021</span><br />
                 <span>Designed by Ritik Joshi</span>
             </div>
        </div>
    )
}

export default footer;