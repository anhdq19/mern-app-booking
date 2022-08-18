import React from 'react';
import "./searchItem.css"

function SearchItem(props) {
    return (
        <div className="searchItem">
            <img
                src="https://images.unsplash.com/photo-1655817837939-770b38318c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Bazan Hotel Dalat</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free taxi from airport</span>
                <span className="siSubTitle">
                    Chỗ nghỉ Du lịch Bền vững
                </span>
                <span className="siFeatures">
                     Free Wifi - Free Parking -  Family rooms -  Airport shuttle - Non smoking rooms
                </span>
                <span className="siCancelOp">
                    Free cancellation
                </span>
                <span className="siCancelOpSubTitle">
                    You can cancel late
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$100</span>
                    <span className="siTaxOp">Includes tax and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>

        </div>
    );
}

export default SearchItem;