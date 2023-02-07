import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SuggestionsGrid from './components/SuggestionsGrid'
import { Item } from './business/Item'

function App() {
  const [cartItems, setCartItems] = useState([
    {
      item: new Item(1, 'My Christmas pack', undefined, [
        new Item(4, 'Cardboard box', 10),
        new Item(5, 'Unisex Short Sleeve T-Shirt', 20),
        new Item(6, 'Basic bottle', 41.20)
      ]),
      quantity: 50
    },
    {
      item: new Item(2, 'Basic T-Shirt', 13.50),
      quantity: 10
    },
    {
      item: new Item(3, 'Woman bottle', 36.50),
      quantity: 20
    }
  ])

  const handleQuantityChange = (itemID: number, newQuantity: number) => {
    setCartItems(prev => {
      return prev.map(i => {
        if (i.item.id === itemID) {
          return {
            item: i.item,
            quantity: newQuantity
          }
        } else {
          return i
        }
      })
    })
  }

  const handleRemoveItem = (itemID: number) => {
    setCartItems(prev => {
      return prev.filter(item => item.item.id != itemID)
    })
  }

  return (
    <div className="App">
      <Navbar itemCount={cartItems.length}/>
      <main>
        <Cart
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}/>
        <SuggestionsGrid />
        <Footer />
      </main>
    </div>
  )
}

export default App
