const orders = [ 
   { 
       id: 1, 
       status: 'delivered', 
       deliveryDate: '2024-12-05', 
       items: [ 
           { productName: 'Item1', quantity: 2, price: 50 }, 
           { productName: 'Item2', quantity: 1, price: 100 } 
       ] 
   }, 
   { 
       id: 2, 
       status: 'pending', 
       deliveryDate: '2024-10-12', 
       items: [ 
           { productName: 'Item3', quantity: 1, price: 200 } 
       ] 
   }, 
   { 
       id: 3, 
       status: 'shipped', 
       deliveryDate: '2024-10-08', 
       items: [ 
           { productName: 'Item4', quantity: 3, price: 30 }, 
           { productName: 'Item5', quantity: 2, price: 70 } 
       ] 
   }, 
   { 
       id: 4, 
       status: 'canceled', 
       deliveryDate: null, 
       items: [ 
           { productName: 'Item6', quantity: 1, price: 120 }, 
           { productName: 'Item7', quantity: 1, price: 60 } 
       ] 
   }, 
   { 
       id: 5, 
       status: 'delivered', 
       deliveryDate: '2024-9-03', 
       items: [ 
           { productName: 'Item8', quantity: 4, price: 25 }, 
           { productName: 'Item9', quantity: 2, price: 80 } 
       ] 
   }, 
   { 
       id: 6, 
       status: 'processing', 
       deliveryDate: '2024-10-15', 
       items: [ 
           { productName: 'Item10', quantity: 5, price: 10 } 
       ] 
   }, 
   { 
       id: 7, 
       status: 'delivered', 
       deliveryDate: '2024-10-02', 
       items: [ 
           { productName: 'Item11', quantity: 2, price: 150 }, 
           { productName: 'Item12', quantity: 3, price: 200 } 
       ] 
   }, 
   { 
       id: 8, 
       status: 'returned', 
       deliveryDate: null, 
       items: [ 
           { productName: 'Item13', quantity: 1, price: 300 } 
       ] 
   }, 
   { 
       id: 9, 
       status: 'pending', 
       deliveryDate: '2024-10-20', 
       items: [ 
           { productName: 'Item14', quantity: 2, price: 100 }, 
           { productName: 'Item15', quantity: 1, price: 250 } 
       ] 
   }, 
   { 
       id: 10, 
       status: 'delivered', 
       deliveryDate: '2024-1-01', 
       items: [ 
           { productName: 'Item16', quantity: 5, price: 20 }, 
           { productName: 'Item17', quantity: 3, price: 120 } 
       ] 
   }, 
   { 
       id: 11, 
       status: 'processing', 
       deliveryDate: '2024-10-14', 
       items: [ 
           { productName: 'Item18', quantity: 6, price: 15 }, 
           { productName: 'Item19', quantity: 1, price: 450 } 
       ] 
   }, 
   { 
       id: 12, 
       status: 'shipped', 
       deliveryDate: '2024-10-07', 
       items: [ 
           { productName: 'Item20', quantity: 2, price: 90 }, 
           { productName: 'Item21', quantity: 4, price: 75 } 
       ] 
   }
];


function costPerMonth(orders) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
   return orders.filter(product => product.status === 'delivered') //Отфильтрует все заказы со статусом "delivered".
   .reduce((result,order) =>{
    const totalCoast = order.items.reduce((sum,item) => sum + item.price * item.quantity,0);//Посчитает общую стоимость всех товаров в каждом заказе.
    const month = months[new Date(order.deliveryDate).getMonth()];
    if(!result[month]){         //
        result[month] = 0;      //
    }                           // Сгруппирует заказы по месяцам доставки.
    result[month]+=totalCoast;  //
    return result;
},{});
}

console.log(costPerMonth(orders));