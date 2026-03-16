import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
// http://localhost:3000/api/products?search=wooden
app.get('/api/products', (req, res) =>{
    const products = [
        {   id: 1, 
            name: 'wooden chair', 
            price: 10.99, 
            description: 'This is product 1',
            Image: 'https://example.com/product1.jpg'
        },

        { 
            id: 2, 
            name: 'fibre table', 
            price: 19.99, 
            description: 'This is product 2' ,
            Image: 'https://example.com/product2.jpg'
        }


    ];

    if(req.query.search){
        const filterProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase()));
            res.send(filterProducts);
            return;
        
    }
    setTimeout(() => {
        res.json(products);
    }, 3000); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});