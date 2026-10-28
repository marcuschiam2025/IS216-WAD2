# This is a backend Express API Mockup using Node.js + Express.js 

# This application exposes 4 APIs 
    GET /products # return a list of products 
    POST /login # Mockup login that accepts any username/password
    POST /checkout # Mockup checkout
    GET /orders # return a list of past orders
    
# Example usage:
    In your Vue.js application, make this async. call to retrieve products in JSON data format:
        const response = await axios.get('http://localhost:8000/products')

    make this async. call for user authentication. It will do a fake login 
        const response = await axios.post('http://localhost:8000/login', { username, password })

    make this async. call to check out the cart items
      const response = await axios.post('http://localhost:8000/checkout',
        { items: items.value },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

    make this async. call to retrieve past orders 
        const response = await axios.get("http://localhost:8000/orders", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })

    

# Setting Up
1: In the terminal, go to the folder
    cd server/products

2: run commands
    pnpm install
    pnpm dev



