import React from 'react';
import { Link } from 'react-router-dom';

function CategoryMenu( props ) {
    const { type = 1 } = props;

    return (
        <div className="dropdown category-dropdown">
            {/* <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                Browse Categories
                { type === 3 ?
                    <i className="icon-angle-down"></i>
                    : ''
                }
            </Link>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        <li className="item-lead"><Link to="#">Daily offers</Link></li>
                        <li className="item-lead"><Link to="#">Gift Ideas</Link></li>
                    </ul>
                </nav>
            </div> */}
        </div>
    );
}

export default React.memo( CategoryMenu ); 