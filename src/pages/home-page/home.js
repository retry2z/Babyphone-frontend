import React from 'react';

import ProductList from '../../components/product/list/list';
import Common from '../../components/common/common';
import Title from '../../components/core/title/title';

const Home = () => {
    return (
        <Common>
            <Title title='Publication' />
            <ProductList />
        </Common>
    )
}

export default Home