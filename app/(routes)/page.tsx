import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-lists"
import Container from "@/components/ui/Container"
import NoResult from "@/components/ui/no-result"


export const revalidate = 0;
const HomePage = async() => {

  const products = await getProducts({isFeatured: true}); 
  const data = await getBillboard("b9293939-a57d-4bd9-9a48-18f3ef241dd7");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={data}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" products={products}/>
      </div>
      </div>
    </Container>
  )
}

export default HomePage