import React from "react";
import {Link} from "react-router-dom";

const Header_comp = ({text_title,url})=> {
    return (
        <div><li className="nav-item">
                            <Link to={url} className="nav-link">
                                {text_title}
                                </Link>
                        </li>
</div>
)

};
export default Header_comp;
