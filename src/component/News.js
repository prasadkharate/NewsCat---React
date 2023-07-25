import React, {useEffect, useState} from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News= (props)=> {
    const [articles, setArticles] = useState([])
    const [pages, setPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = capitalizeFun(`${props.category} - NewCats`);
         
    const capitalizeFun = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
    const updateNews= async () =>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country
            }&category=${props.category
            }&apiKey=ff0585855bc24313877c8b7868601ef8&page=${pages}&pageSize=${props.pageSize
            }`
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
       


    }
    useEffect(() => {
      updateNews()

    }, [])
    
    

    const handlePrevClick = async () => {
        
        setPages(pages-1)
        updateNews();
    }
    const handleNextClick = async () => {
        
        setPages(pages+1)
        updateNews();
    }
   const fetchMoreData = async() => {
    
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country
    }&category=${props.category
    }&apiKey=ff0585855bc24313877c8b7868601ef8&page=${pages + 1}&pageSize=${props.pageSize
    }`
    setPages(pages + 1)
       
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)
        
     
      };

        return (
            <>

                <h1 className='text-center' style={{marginTop:'90px'}}>NewsCat - Top Headline from {capitalizeFun(props.category)}</h1>
                {
                    loading && <Spinner/>
                }
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">

                        {articles.map((element) => {
                            return <div className="col-md-4"
                                key={
                                    element.url
                                }>
                                <Newitems title={
                                    element.title ? element.title.slice(0, 45) : ""
                                }
                                    description={
                                        element.description ? element.description.slice(0, 88) : ""
                                    }
                                    imageUrl={
                                        element.urlToImage
                                    }
                                    url={
                                        element.url
                                    } author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>


                        })
                        } </div>
                        </div>
                        </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-2">
                        <button disabled={
                            this.state.pages <= 1
                        }
                            type="button"
                            className="btn btn-dark"
                            onClick={
                                this.handlePrevClick
                            }>&larr; Previous</button>
                        <button disabled={
                            this.state.pages + 1 > Math.ceil(this.state.totalResults / props.pageSize)
                        }
                            type="button"
                            className="btn btn-dark"
                            onClick={
                                this.handleNextClick
                            }>Next &rarr;</button>
                    </div> */}

           
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
