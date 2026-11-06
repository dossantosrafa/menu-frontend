import { CategoryNav } from "./cases/categories/components/category-nav"
import { ProductList } from "./cases/products/components/product-list"
import { Header } from "./components/layout/header"

function App() {

  return (
    <>
      <Header />
      <CategoryNav />
      <ProductList />
    </>
  )
}

export default App
