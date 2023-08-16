const products = [
  {
    id: 1000,
    name: 'Teclado',
    value: 70,
    stock: 12
  },
  {
    id: 1001,
    name: 'Mouse',
    value: 50,
    stock: 10
  },
  {
    id: 1002,
    name: 'Fones',
    value: 30,
    stock: 42
  }
]

const customers = [
  {
    id: 2000,
    name: 'Jean Leles',
    balance: 1900,
    products: []
  },
  {
    id: 2001,
    name: 'Maria Silva',
    balance: 1200,
    products: []
  },
]

//CREATE
function createProduct(name, value, stock) {
  const id = products[products.length-1].id + 1
  const newProduct = {id: id, name: name, value: value, stock: stock}
  products.push(newProduct)
}
createProduct('Notebook',  5490, 20)

//READ
function readProducts(){
  console.log(products)
  return products
}
readProducts()

//UPDATE
function updateProduct(id, name, value, stock) {
  const index = products.findIndex(item => item.id == id)

  products[index].name = name
  products[index].value = value
  products[index].stock = stock
}
updateProduct(1002, 'Fones de Ouvido', 25, 19)
readProducts()