/**
 * Created by jonsm on 7/21/2017.
 */
import React from 'react';


export default props => {

    const style = {
        position: 'absolute',
        right: '10px',
        top: '5px'
    };

    const list = props.list.map((item,index) => {

        return (
            <li key={index} className="list-group-item">{item.title}
                <button style={style} onClick={() => props.remove(item._id)} className="btn btn-outline-danger">Delete</button>
            </li>
        )

    });

    return (
        <div>
            <ul className="list-group">
                {list}
            </ul>
        </div>
    )

}
