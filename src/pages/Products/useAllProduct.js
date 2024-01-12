import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../Services/apiProduct';

export const useAllProduct = () => {
  const { data:products, isLoading, isError } = useQuery(['products'], getAllProducts, {
    refetchOnWindowFocus: false,
  });
  return { products, isLoading, isError };
}