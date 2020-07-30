import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const title = data?.title || 'Loading...';
    const keywords = data?.keyWords.join(', ') || 'Loading...';
    const id = data?.id || 'error';

    return (
        <Link to={'/product/details/' + id} style={{ textDecoration: 'none' }}>
            <div className={style.card_simple}>
                <div className={style.body}>
                    <p>
                        <span>Title: </span>
                        {title}
                    </p>
                    <p>
                        <span>Key words: </span>
                        {keywords}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard