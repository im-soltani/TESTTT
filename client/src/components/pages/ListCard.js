import React from 'react'
import {Link} from "react-router-dom"
import  Rate from  "../Rate"

function ListCard({profile: { category,codePostal,_id,Rating }}) {
    return (
     
      <div className="container">
      <div className="row bootstrap snippets bootdeys">
          <div className="col-md-3">
            <div className="panel widget">
              <div className="widget-header bg-primary">
              <div className="widget-body text-center">
                <img alt="Profile Picture" className="widget-img img-circle img-border-light" src="https://previews.123rf.com/images/jemastock/jemastock1709/jemastock170909982/85612118-travailleur-de-r%C3%A9paration-ou-avatar-bricoleur-avec-bras-crois%C3%A9s-ic%C3%B4ne-image-vector-illustration-design.jpg"/>
                <h4 className="mar-no">John Doe</h4>
                <p /*className="text-muted mar-btm"*/  style={{color: "black"}}>{category}</p>
                <p /*className="text-muted mar-btm" */ style={{color: "black"}}>{codePostal}</p>
                <div className="product-rating">
                  <Rate
                    value={Rating}
                  />
                </div>
                <div className="pad-ver">
                  <button className="btn btn-primary"><Link to={`/profilefiche/${_id}`}>view profil</Link></button>
                  
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
                      
          
      
    )
}
export default ListCard


