# Задание 1
Есть таблица A с тремя колонками B, C, D. Типы колонок — varchar2(10). В таблице нет никаких индексов, констрейнтов. Необходимо написать наиболее оптимизированный скрипт удаления в таблице дублей (повторений всех трех колонок). Результат удаления скрипта — в таблице должны остаться только неповторяющиеся записи.

создание таблицы A

<div align="center" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); border-radius: 10px; padding: 10px; background-color: #f9f9f9;"> <img src="https://github.com/user-attachments/assets/757d3a1b-8ef0-4d4c-8f8c-7f29b1e3d79b" alt="Создание таблицы A" style="width:70%; border-radius: 8px;"/> </div>

Наполнение таблицы A

![image](https://github.com/user-attachments/assets/c900c985-e0d5-4d35-a2de-97fb3f72e8ef)

Полученная таблица

![image](https://github.com/user-attachments/assets/fdee3a30-33e5-4d86-9d2b-f87cf9768c97)

Удаление дубликатов

![image](https://github.com/user-attachments/assets/c0fcc7c6-c9bf-4fd7-af04-824820ee5871)

Таблица без дубликатов

![image](https://github.com/user-attachments/assets/bb895c80-a1d1-46f2-859b-0bd5e993cb04)

# Задание 2
Есть две таблицы A и B. В каждой таблице есть колонка C. Составьте запрос так, чтобы результатом запроса стала выборка непересекающегося множества значений колонки C из таблиц A и B.

создание таблицы B

![image](https://github.com/user-attachments/assets/03deb52b-bf47-4f6b-9c44-8485ecb1a909)

Наполнение таблицы B

![image](https://github.com/user-attachments/assets/5bed0923-3ecc-4275-8adc-3abf7561e47d)

Получение выборка непересекающегося множества значений колонки C

![image](https://github.com/user-attachments/assets/06c64c85-86b7-48c2-a58c-e3eb52df83a7)

Полученная выборка

![image](https://github.com/user-attachments/assets/b124c6b9-1e06-46b3-ad58-d4f539cdfaa8)

# Задание 3
Создайте структуру базы данных для решения следующей задачи: У управляющей компании стоит задача создать реестр квартир и жильцов дома. При этом нужно понимать, в каком подъезде и на каком этаже находится квартира. Количество квартир на этажах не всегда одинаковое. Количество квартир — 1471, подъездов — 7, этажей в доме — 17. Для квартир необходимо знать площадь и количество прописанных жильцов.


ERD схема БД

![image](https://github.com/user-attachments/assets/ea13729a-c08e-4e60-934c-03d6f3e6170d)

SQL скрипт

![image](https://github.com/user-attachments/assets/fa76387b-b115-458b-b590-8d3d4e83039a)

# Задание 4
Есть массив заказов orders, в котором каждый заказ — это объект {id, status, deliveryDate, items}, где items – массив объектов {productName, cost, quantity}.

Нужно написать функцию, которая:

Отфильтрует все заказы со статусом "delivered".
Посчитает общую стоимость всех товаров в каждом заказе.
Сгруппирует заказы по месяцам доставки.
Итого функция должна вернуть объект, где ключ – это название месяца (в формате "January", "February", и т.д.), а значение – это общая стоимость доставленных заказов за этот месяц.

Пример данных:
```javascript
const orders = [ 
    { 
        id: 1, 
        status: 'delivered', 
        deliveryDate: '2024-10-05', 
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
    } 
];
```
Массив заполненный данными для задания
```javascript
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
```

Js скрипт для выполнения задания
```javascript
function costPerMonth(orders) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
   return orders.filter(product => product.status === 'delivered') //Отфильтрует все заказы со статусом "delivered".
   .reduce((result,order) =>{
    const totalCoast = order.items
    .reduce((sum,item) => sum + item.price * item.quantity,0);//Посчитает общую стоимость всех товаров в каждом заказе.
    const month = months[new Date(order.deliveryDate).getMonth()];
    if(!result[month]){         //
        result[month] = 0;      //
    }                           // Сгруппирует заказы по месяцам доставки.
    result[month]+=totalCoast;  //
    return result;
},{});
}

console.log(costPerMonth(orders));
```
Результат выпорлнения скрипта
![image](https://github.com/user-attachments/assets/35bf6f88-1b3a-465c-82d4-b0d7b71be327)




