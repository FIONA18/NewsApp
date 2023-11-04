import React from 'react'

const NewsItem =(props)=>{
  
    let {title, description, imageUrl, newsURL, date, author,source}= props
    return (
      <div>
        
        <div className="card">
          <span className="position-absolute badge  bg-success">
              {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {date? new Date(date).toGMTString(): ""}</small></p>
            <a href={newsURL} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
 
}

export default NewsItem
