import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './main.css'
import axios from 'axios'

const Main = () => {
  const [inform, setInform] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])

  const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])
  const [heart, setHeart] = useState([])

const [isopen, setIsopen] = useState(false)
function handleOpen(e) {
  setIsopen(!isopen)
}



const [isopenwishlist, setIsopenwishlist] = useState(false)
function handleOpenWishlist(e) {
  setIsopenwishlist(!isopenwishlist)
}

  let subtotal=0
  basket.forEach(element => {
    subtotal+=parseInt(element.total)
  });

  const baseUrl = "http://localhost:5000/clothes"
  const datas = async () => {
    const response = await axios.get(`${baseUrl}`)
    setInform(response.data)
    setIsLoading(false)
  }
  useEffect(() => {
    datas()
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])


  useEffect(() => {
    localStorage.setItem('basket',JSON.stringify(basket))
  }, [basket])
  
function handleAddWishlist(x) {
  const wishlistElementIndex=wishlist.findIndex(item=>item.id === x.id)
if (wishlistElementIndex === -1) {
  setWishlist([...wishlist, {...x}])
  const heartIcon=heart.includes(x.id)
  if (heartIcon) {
    setHeart(heart.filter(id=>id!==x.id))
  }
  else{
    setHeart([...heart, x.id])
  }


} 
  
}


function handleRemoveWishlist(id) {
  setWishlist(wishlist.filter(x=>x.id !== id))
}

function handleClearWishlist() {
  setWishlist([])
}

  function handleAddBasket(x) {
   const elementIndex=basket.findIndex(item=>item.id === x.id)
   if (elementIndex !== -1) {
    const newBasket=[...basket]
    newBasket[elementIndex].count++
    newBasket[elementIndex].total= newBasket[elementIndex].count*  newBasket[elementIndex].price
    setBasket(newBasket)
   } else {
    const total=x.price
    setBasket([...basket, {...x, count:1, total:total}])
    
   }
  }
  function handleRemove(id) {
    setBasket(basket.filter(x => x.id !== id))
  }
  function handelCountVal(isAdd, x) {
   const elementIndex=basket.findIndex(item=>item.id === x.id)
   const newBasket=[...basket]
    if (isAdd) {
    newBasket[elementIndex].count++
    newBasket[elementIndex].total= newBasket[elementIndex].count*  newBasket[elementIndex].price
    setBasket(newBasket)

    } else {
      if (newBasket[elementIndex].count===1) {
        return
      }
      newBasket[elementIndex].count--
      newBasket[elementIndex].total= newBasket[elementIndex].count*  newBasket[elementIndex].price
      setBasket(newBasket)
  
    }
  }

function handelClear() {
setBasket([])
}

  return (
   <> 
   <div className='AllBtns'>
      <button className='openBasket' onClick={(e)=>handleOpen(e)}> 
      <i class="fa-solid fa-store"></i>
      </button>
      <button className='openBasket' onClick={(e)=>handleOpenWishlist(e)}> 
      <i class="fa-solid fa-heart"></i>
      </button>
      </div>
    <div className='main'>
    
        
        <div className={`wishlist ${isopenwishlist ? 'open' : ""}`}>
    {wishlist && wishlist.map((item)=>(
          <div className='wishlistBox' key={item.id}>
            <img src={item.image} alt="" />
            <p>Product: {item.product}</p>
            <p>Color: {item.color}</p>
            <p>Price: {item.price}$</p>
            <p>Rating: {item.rating}</p>
            <div className='wishlistBtnBox'>
            <button onClick={()=>handleRemoveWishlist(item.id)}>
              <i class="fa-solid fa-heart-circle-xmark"></i>
            </button>
            <button onClick={() => handleAddBasket(item)}>
              <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
      ))
    }
    <div className='clearWishlistBox'>
        <button onClick={()=>handleClearWishlist()}>
          <i class="fa-solid fa-trash"></i>
          </button>
    </div>
        </div>
      <div className={`basket ${isopen ? 'open' : ""}`}>
        {
          basket && basket.map((item) => (
            <div className='basketBox'>
              <button onClick={() => handleRemove(item.id)}>
                <i class="fa-solid fa-xmark"></i>
              </button>
              <img src={item.image} alt="" />
              <div>
                <div>
                  <p>Product: {item.product}</p>
                  <p>Color: {item.color}</p>
                </div>
                <div>
                  <p>Price: {item.price}$</p>
                  <p>Rating: {item.rating}</p>
                </div>
              </div>
              <div>
              <div className='counterBox'> 
                <button onClick={()=>handelCountVal(true,item)}>+</button>
                  <p>Count: {item.count}</p>
                  <button onClick={()=>handelCountVal(false,item)}>-</button>
              </div>
              <div>
                <p>Total: {item.total}$</p>
              </div>
              </div>
            </div>
          ))
        }
        <div className='subtotalBox'>
          <button onClick={()=>handelClear()}>
            <i class="fa-solid fa-trash"></i>
            </button>
        <h1>SubTotal: {subtotal}$</h1>
        </div>
      </div>

      {isLoading ? (

        <img className='loading' src='https://media.tenor.com/G7LfW0O5qb8AAAAC/loading-gif.gif'></img>) : (

        inform.map((item) => (
          <>

            <div className='cardAndSubmenu'>
              <div className='card'>
                <img src={item.image}></img>
              </div>
              <div className='cardSubmenu'>
                <p>Product: {item.product}</p>
                <p>Color: {item.color}</p>
                <p>Price: {item.price}$</p>
                <p>Rating: {item.rating}</p>
                <div className='BasketsButtons'>
                  <button onClick={() => handleAddBasket(item)}>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                  <button onClick={() => handleAddWishlist(item)}>
                    <i class={`${heart.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`} ></i>
                  </button>
                  <Link to={`/details/${item.id}`}>
                  <button>
                    <i class="fa-regular fa-eye"></i>
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div></>

  )
}

export default Main