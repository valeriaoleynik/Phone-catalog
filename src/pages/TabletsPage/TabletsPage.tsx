import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { NoResults } from '../../components/NoResults';
import { Search } from '../../components/Search';
import { getTablets } from '../../services/products';
import { useProducts } from '../../store/ProductsContext';

import './TabletsPage.scss';

export const TabletsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const products = useProducts();
  const tablets = getTablets(products);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!tablets.length) {
    return <NoResults />;
  }

  return (
    <div className="tablets tablets__content">
      <Search type="mobile" />
    </div>
  );
};
