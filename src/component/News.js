import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "news24", "name": "News24" },
            "author": "Sibusiso Mjikeliso",
            "title": "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
            "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
            "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
            "publishedAt": "2021-08-26T11:40:16+00:00",
            "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
        },
        {
            "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
            "author": "ABC News",
            "title": "England cricket great Ted Dexter dies aged 86",
            "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
            "url": "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
            "publishedAt": "2021-08-26T09:07:52Z",
            "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "author": "Ray Massey",
            "title": "A highly charged debate: Is Government's electric car plan realistic?",
            "description": "Are you ready for 'charging rage'? That's what experts predict will happen when too many electric car drivers compete for too few public charging points.",
            "url": "https://www.thisismoney.co.uk/money/cars/article-10834553/A-highly-charged-debate-Governments-electric-car-plan-realistic.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/19/20/58038675-0-image-a-17_1652989635157.jpg",
            "publishedAt": "2022-05-19T20:50:46Z",
            "content": "Are you ready for charging rage? Thats what experts predict will happen when too many electric car drivers compete for too few public charging points.\r\nPrepare for squabbles at the wave of bespoke el… [+8906 chars]"
        },
        {
            "author": "BY C. SUAREZ ROJAS Richmond Times-Dispatch",
            "title": "City Council committee gives OK for property transfer ahead of Richmond Coliseum sale, demolition",
            "description": "The Richmond Economic Development Authority could soon have a 12-month deadline to demolish the Richmond Coliseum as part of the city's plans to sell and redevelop the shuttered downtown property.",
            "url": "https://richmond.com/news/local/city-council-committee-gives-ok-for-property-transfer-ahead-of-richmond-coliseum-sale-demolition/article_5eae1cd6-3898-55c2-8fbb-1c8ecf556fc6.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/0/b3/0b399c10-49cf-53a9-ae27-92a04b248cb7/5f4afca7bb3d0.image.jpg?crop=1796%2C943%2C0%2C105&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2022-05-19T20:48:00Z",
            "content": "The Richmond Economic Development Authority could soon have a 12-month deadline to demolish the Richmond Coliseum as part of the city's plans to sell and redevelop the shuttered downtown property.\r\nF… [+33349 chars]"
        },
    ]
    constructor() {
        super();
        this.state = {
            article: this.articles,
            page: 1,
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-12-17&sortBy=publishedAt&apiKey=2fdb0b08af084481b1cd2c226739c437";
        let data = await fetch(url);
        let filterData = await data.json();
        console.log('filterData ::::',filterData);
        if (filterData && filterData.articles && filterData.articles.length) {
            this.setState({ article: filterData.articles, totalResults: filterData.totalResults });
        }
    }
    privious = async () => {
        console.log('privious');
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-17&sortBy=publishedAt&apiKey=2fdb0b08af084481b1cd2c226739c437&page=${this.state.page - 1}&pageSize=9`;
        let data = await fetch(url);
        let filterData = await data.json();
        console.log(filterData);
        if (filterData && filterData.articles && filterData.articles.length) {
            this.setState({ article: filterData.articles, });
            this.setState({
                page: this.state.page - 1
            })
        }
    }
    next = async () => {
        console.log('next');
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
        }
        else {
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-17&sortBy=publishedAt&apiKey=2fdb0b08af084481b1cd2c226739c437&page=${this.state.page + 1}&pageSize=9`;
            let data = await fetch(url);
            let filterData = await data.json();
            console.log(filterData);
            if (filterData && filterData.articles && filterData.articles.length) {
                this.setState({ article: filterData.articles });
                this.setState({
                    page: this.state.page + 1
                })
            }
        }
    }
    
    render() {
        var cs = {
            //  backgroundColor: 'black',
            //  color:"white"
        }


        return (
            <>
                <div className='container ' style={cs}>
                    <div className='row '>
                        <h1>{this.props.searchtext}</h1>
                        <h1 className='text-center'>BaBa Hot News</h1>
                        {this.state.article && this.state.article.length && this.state.article.map((e) => {
                            return <div className='col-md-4 ' key={e.url} >
                                <NewsItem title={e.title ? e.title.slice(0, 40) : ""} discription={e.description ? e.description.slice(0, 80) : ""} imgUrl={e.urlToImage} newsUrl={e.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between my-5">
                        <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.privious}>&larr; Previous </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} className='btn btn-dark' onClick={this.next}>Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
