import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { NoResults } from '../../components/NoResults';
import { Search } from '../../components/Search';
import { getTablets } from '../../services/products';
import { useProducts } from '../../store/ProductsContext';

import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const products = useProducts();
  const accessories = getTablets(products);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!accessories.length) {
    return <NoResults />;
  }

  return (
    <div className="accessories accessories__content">
      <Search type="mobile" />
    </div>
  );
};
