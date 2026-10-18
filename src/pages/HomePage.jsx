import React, { useEffect, useState } from 'react'

function HomePage() {
  const [open, setOpen] = useState(false)

  const [products, setProducts] = useState([])
  const [productForm, setProductForm] = useState({
    id: 0,
    name: "",
    price: "",
    image: ""
  })
  function handleInputChange(e) {
    setProductForm({ ...productForm, [e.target.name]: e.target.value })

  }

  async function getAllProuct() {
    try {
      const res = await fetch("http://localhost:3000/products")
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      })
    } catch (err) {
      console.log(err)
    }
  }
  async function handleCreate(e) {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productForm)
      })

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
     getAllProuct()
  }, [])


  return (
    <div className='px-100 '>
      <button onClick={() => setOpen(true)} className='float-end mb-10 bg-blue-500 text-white px-5 py-2 rounded-md mt-20'>Add new Product</button>

      <table className='table-fixed text-center w-full mt-20  border-collapse border border-gray-400'>
        <thead>
          <tr>
            <th className='border border-gray-300'>ID</th>
            <th className='border border-gray-300 w-50'>Image</th>
            <th className='border border-gray-300'>Name</th>
            <th className='border border-gray-300'>Price</th>
            <th className='border border-gray-300'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(pro => {
              return <tr key={pro.id}>
                <td className='border border-gray-300'>{pro.id}</td>
                <td className='border border-gray-300'>
                  <img className='w-20 h-20' src={pro.image} alt="" />
                </td>
                <td className='border border-gray-300'>{pro.name}</td>
                <td className='border border-gray-300'>{pro.price}</td>
                <td className='border border-gray-300 space-x-3'>
                  <button className='px-5 py-2 bg-green-500 text-white rounded-md'>Edit</button>
                  <button type='button' onClick={() => handleDelete(pro.id)} className='px-5 py-2 bg-red-500 text-white rounded-md'>Delete</button>
                </td>
              </tr>
            })
          }

        </tbody>
      </table>

      {/* Create Product Modal */}
      {
        open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Create Product
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the product information below.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-2xl text-gray-400 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleCreate} className="space-y-5 p-6">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={productForm.id}
                  onChange={handleInputChange}
                  placeholder="Enter product ID"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={productForm.price}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={productForm.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"

                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Create Product
                </button>
              </div>

            </form>
          </div>
        </div>

      }



    </div>
  )
}

export default HomePage