const products = [
    { id: '1', name: 'Zapatillas', price: 15000, stock: 1, category: 'hombres', picture: '/assets/products/timberland-hombre.jpg', description: 'Zapatillas casuales.' },
    { id: '2', name: 'Botas', price: 12000, stock: 30, category: 'niños', picture: '/assets/products/timberland-niño.jpg', description: 'All-Star pero de timberland.' },
    { id: '3', name: 'Botas', price: 25000, stock: 10, category: 'mujeres', picture: '/assets/products/bota-timberland-mujer.jpg', description: 'Botas para invierno.' },
    { id: '4', name: 'Botas', price: 3000, stock: 10, category: 'niños', picture: '/assets/products/timberland-niños.jpg', description: 'Botas para niño unisex.' },
]

export const gFetch = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(products)
        }, 2000)

    })
}