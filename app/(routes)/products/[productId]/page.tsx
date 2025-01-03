import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";
import ProductList from "@/components/product-lists";
import Container from "@/components/ui/Container";


interface ProductPageProps{
    params:{
        productId: string;
    }
}
const ProductPage:React.FC<ProductPageProps> = async({params}) => {
    const product = await getProduct(params.productId);
    const suggestions = await getProducts({
        categoryId: product?.category?.id
    })
  return (
    <div className=" bg-white">
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Gallery key={product?.id} images={product?.images}/>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product}/>
                    </div>
                </div>
                <hr className=" my-10"/>
                <ProductList title="Related Item" products={suggestions}/>
            </div>
        </Container>
    </div>
  )
}

export default ProductPage