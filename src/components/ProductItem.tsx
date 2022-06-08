import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

/**
 * 1. Criar uma nova versao do componente
 * 2. Compara com a versao anterior
 * 3. se tiver alteracoes, atualiza com o que alterou
 * //shallow compare = verifica a igualdade das informações dentro das propriedades
 * {} === {} = false = Igualdade referencial --- compara se estao ocupando o mesmo
 * lugar na memória
 */

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
  }
);
