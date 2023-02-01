import React from 'react'

// styles
import './ArticleGrid.scss'

const ArticleGrid = (props) => {
    return (
        <div className='article_grid'>
            {props.children}
        </div>
    )
}
    
export default ArticleGrid;
