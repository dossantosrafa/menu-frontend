import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/use-product";

export function ProductList() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const {
    data: products = [],
    isPending,
    isError,
  } = useProducts();

  if (isPending) {
    return <p role="status">Carregando produtos...</p>;
  }

  if (isError) {
    return <p role="alert">Não foi possível carregar os produtos.</p>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !categoryId || product.category?.id === categoryId;

    return product.active && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    return <p>Nenhum produto disponível nesta categoria.</p>;
  }

  return (
    <section aria-label="Produtos">
      <h1 className="mb-6 text-2xl font-bold text-brand">
        Produtos
      </h1>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-xl border bg-card"
          >
            {product.picture && (
              <img
                src={product.picture}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="space-y-2 p-4">
              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              {product.description && (
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              )}

              <p className="font-bold text-brand">
                {Number(product.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}