import React, {useState} from "react"


const IpInput = (props) => {

    return(
        <form onSubmit={props.onSubmit}>
            <input className="ip-input" type="text" value={props.value} pattern="^(([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3}):){7}([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3})$">
            </input>
            <button type="submit" onClick={props.onClick}>
            </button>
        </form>
    )
}

export default IpInput