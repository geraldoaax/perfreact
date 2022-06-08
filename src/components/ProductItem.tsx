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

/**
 * Cuidado com otimização prematura - Custo da comparação do memo
 * Onde Utilizar
 * 1. Componentes que são puros (pure funcional components) - Abstrair a parte visual
 * 2. Componentes que renderizam muito - Render too often
 * 3. Componente renderiza novamente com as mesmas props - re-renders with same props
 * 4. Componte médio para grande - Medium to big size
 */

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
