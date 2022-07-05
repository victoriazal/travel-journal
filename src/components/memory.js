import React from "react";
import Loca from "../images/location.png"

export default function Memory(props) {
    return (
        <div className="card">
            <img src={`../images/${props.imageUrl}`} className="card--image" />
            <div className="text--beside">
                <div>
                    <img src={Loca} className="loca--image" />
                    <span className="location">{props.location}</span>
                    <a className="GoogleMapLink" href="{props.googleMapsUrl}">View on Google Maps</a>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--dates">{props.startDate}-{props.endDate}</p>
                <p className="travel--info">{props.description}</p>
            </div>
        </div>
    )
}