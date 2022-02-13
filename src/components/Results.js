import './Results.css'

const Results = (props) => {
    return (
        <div className="info-div border bg-white rounded d-flex flex-column align-items-center justify-content-center py-4">
            <div className="results-cell">
                <div className="results-title-text">IP ADDRESS</div>
                <div className="results-info-text">{props.ipAddress}</div>
            </div>
            <div className="results-cell">
                <div className="results-title-text">LOCATION</div>
                <div className="results-info-text">{props.location}</div>
            </div>
            <div className="results-cell">
                <div className="results-title-text">TIMEZONE</div>
                <div className="results-info-text">{props.timezone}</div>
            </div>
            <div className="results-cell">
                <div className="results-title-text">ISP</div>
                <div className="results-info-text">{props.isp}</div>
            </div>

        </div>
    )
}

export default Results