import React, {useState} from "react"
import './IpInput.css'


const IpInput = (props) => {

    return(
        <form onSubmit={props.onSubmit}>
            <div className="input-group custom-group mb-3">
                <input type="text" className="form-control group-input" value={props.value} pattern="^(([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3}):){7}([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3})$" aria-describedby="button-addon2"/>
                <button className="btn bg-black text-white btn-outline-secondary input-send-button" type="submit" onClick={props.onClick} id="button-addon2">></button>
            </div>
        </form>
    )
}

export default IpInput