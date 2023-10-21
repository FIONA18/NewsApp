import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsURL, date, author,source}= this.props
    return (
      <div>
        
        <div className="card">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
              {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {date}</small></p>
            <a href={newsURL} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
