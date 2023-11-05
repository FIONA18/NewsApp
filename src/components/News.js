import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
//import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {


const [articles, setAtricles] = useState([])
const [page, setPage] = useState(1)
const [totalArticles, setTotalArticles] = useState(0)
const [loading, setLoading] = useState(true)


  const CatipatizeCategory = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //document.title = "NewsNest - " + CatipatizeCategory(props.category);

  
  const  GetNewsData = async() => {
    console.log("Inside GetNewsData")
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let jsonData = await data.json();
    props.setProgress(70);
    console.log("Got the json data")
    props.setProgress(90);
    await setAtricles(jsonData.articles)
    await setTotalArticles(jsonData.totalResults)
    await setLoading(false)
    console.log("Updated state")
    console.log("Exit GetNewsData")
    props.setProgress(100);
  }
  // ReachedEndOfPage() {
  //   return (
  //     page + 1 >
  //     Math.ceil(totalArticles / pageSize)
  //   );
  // }
  // OnLeftBtnClicked = async () => {
  //   await setState({ page: page - 1 });
  //   await GetNewsData();
  // };
  // OnRightBtnClicked = async () => {
  //   console.log("Right Btn Clicked");
  //   if (!ReachedEndOfPage()) {
  //     await setState({ page: page + 1 });
  //     await GetNewsData();
  //   }
  // };
  useEffect(() => {
    //Runs only on the first render
    document.title = "NewsNest - " + CatipatizeCategory(props.category);
    
    GetNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  const fetchMoreData = async() => {
      console.log("Inside fetch more data");
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage((page+1));
      let data =  await fetch(url);
      let jsonData = await data.json();
      setAtricles(articles.concat(jsonData.articles))
      setTotalArticles(jsonData.totalResults)
  };


    return (
      <>
        <h1>
          <div className="container mx-3 my-2">
            <b>NewsNest</b>{" "}
            {` -  ${CatipatizeCategory(
             props.category
            )} Top Headlines`}
          </div>
        </h1>

        {loading && <h2>Loading... </h2>} 

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={ articles.length !== totalArticles}
          loader={<h2>Loading... </h2>}
        >
          <div  className="container">
          <div className="row align-items-start">
              {articles &&
                articles.map((element) => (
                  <div className="col-md-3 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      newsURL={element.url}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.istockphoto.com/id/1657877667/photo/business-news-trends-graphs-and-charts-digital-concept.webp?b=1&s=170667a&w=0&k=20&c=3Yssg8i_3ybB5Cj0CjX43NepTUFE5HkqpPZl-1cEPUI="
                      }
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
            
          
        </InfiniteScroll>

        {/* <div className="hstack gap-3 mx-4 my-4">
          <button type="button" disabled={page<=1} className="btn btn-primary p-2" onClick={OnLeftBtnClicked}> <b>&larr;</b> Left</button>
         
          <button type="button" disabled={ReachedEndOfPage()}className="btn btn-primary p-2 ms-auto" onClick={OnRightBtnClicked}>Right  <b>&rarr;</b> </button>
        </div> */}
      </>
    );
 
}
News.defaultProps = {
  country: "in",
  pageSize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
