import React, { Component } from 'react'


export class NewsItem extends Component {
    render() {
       var  cs={
        //    backgroundColor: 'black',
           width: "18rem",
        //    color:"white"
       }
        var {title,discription,imgUrl,newsUrl} = this.props;
        return (
            <>
                <div className="card my-2" style={cs} >
                    <img src={imgUrl?imgUrl:"https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/0/b3/0b399c10-49cf-53a9-ae27-92a04b248cb7/5f4afca7bb3d0.image.jpg?crop=1796%2C943%2C0%2C105&resize=1200%2C630&order=crop%2Cresize"} height="200" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {title}</h5>
                            <p className="card-text">{discription?discription:"The Richmond Economic Development Authority could soon have a 12-month  ."}</p>
                            <a href={newsUrl} target='_blank' rel="noreferrer"  className="btn btn-dark">Read More</a>
                        </div>
                </div>            </>
        )
    }
}

export default NewsItem