import { useEffect, useState } from "react";
import Product from "../components/Product";
import { MutatingDots } from "react-loader-spinner";
import warning from '../assets/warning.png'


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [productData, setProductdata] = useState([])


  
  async function fetchProductData(){
    setLoading(true)

    try{
      const res = await fetch(API_URL)
      const data = await res.json()
      setProductdata(data)
      console.log(productData)
    }
    catch(error){
      console.log('error ala ree')
      setProductdata([])
    }
    setLoading(false)
  }

  useEffect( () => {
    fetchProductData()
  },[])

  console.log(productData)

  return (
    <div className="">
      {
        loading ? 
        (<div className="flex justify-center items-center h-screen">
          <MutatingDots 
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>) 
        : 
        (
          productData.length > 0 ? 
          (
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
              {
                productData.map( (post) => (
                  (<Product key={post.id} post={post} />) 
                ))
              }
            </div>
          ) :
          (
            <div className="flex justify-center  h-screen items-center">
              <img src={warning} width={180} />
            </div>

          )
        )
      }
      
    </div>
  );
};


export default Home;


