  export async function getAllProuct() {
    try {
      const res = await fetch("http://localhost:3000/products")
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
