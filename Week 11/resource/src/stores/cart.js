import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'

const STORAGE_KEY ='cart'

function loadCart() {
  const data = localStorage.getItem(STORAGE_KEY) // saved items [{ productId, title, price, qty }]

  // can return two types of data -- null, [ ]

  // localStorage stores strings
  // JSON.parse -> converts strings to JS object /array

  const parsed = data ? JSON.parse(data) : []

  return parsed
}

function saveCart(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}


export const useCartStore = defineStore('cart', () => {
  // states
  const items = ref(loadCart()) // { productId, title, price, qty }



  // getters
  // the following computed() works the same
  // const itemCount = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0))
  const itemCount = computed(() => {
    let count = 0
    for (let item of items.value) {
      count += item.qty
    }
    return count
  })

  // const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.qty, 0))
  const totalPrice = computed(() => {
    let total = 0
    for (let item of items.value) {
      total += item.qty * item.price
    }
    return total
  })

  const isEmpty = computed(() => items.value.length === 0)

  // actions
  function addToCart(product) {
    const existing = items.value.find((i) => i.productId === product.id)
    if (existing) existing.qty += 1
    else {
      items.value.push({
        productId: product.id,
        title: product.title,
        price: product.price,
        qty: 1,
      })
    }

    saveCart(items.value)
  }

  function removeFromCart(productId) {
    items.value = items.value.filter((i) => i.productId !== productId)
    saveCart(items.value)
  }

  function increaseQty(productId) {
    const item = items.value.find((i) => i.productId === productId)
    if (item) item.qty += 1
    saveCart(items.value)
  }

  function decreaseQty(productId) {
    const item = items.value.find((i) => i.productId === productId)
    if (!item) return
    item.qty -= 1
    if (item.qty <= 0) {
      // remove from cart when the quantity <= 0
      removeFromCart(productId)
    }
    saveCart(items.value)
  }

  async function checkout(token) {
    console.log(token)
    // checkout call (requires token) 
    const url = 'http://localhost:8000/checkout'
    try {
      const res = await axios.post(
        url,
        { items: items.value },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(res.data)
      clearCart()
      alert('Checkout successful!')
    } catch (e) {
      console.log(e)
      alert('Checkout failed.')
    }
  }

  function clearCart() {
    items.value = []
    saveCart(items.value)
  }

  return {
    items,
    itemCount,
    totalPrice,
    isEmpty,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    checkout,
    clearCart,
  }
})