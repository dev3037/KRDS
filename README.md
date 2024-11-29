# KRDS
# 1
Есть таблица A с тремя колонками B, C, D. Типы колонок — varchar2(10). В таблице нет никаких индексов, констрейнтов. Необходимо написать наиболее оптимизированный скрипт удаления в таблице дублей (повторений всех трех колонок). Результат удаления скрипта — в таблице должны остаться только неповторяющиеся записи.

создание таблицы A

![image](https://github.com/user-attachments/assets/757d3a1b-8ef0-4d4c-8f8c-7f29b1e3d79b)

Наполнение таблицы A

![image](https://github.com/user-attachments/assets/c900c985-e0d5-4d35-a2de-97fb3f72e8ef)

Полученная таблица

![image](https://github.com/user-attachments/assets/fdee3a30-33e5-4d86-9d2b-f87cf9768c97)

Удаление дубликатов

![image](https://github.com/user-attachments/assets/c0fcc7c6-c9bf-4fd7-af04-824820ee5871)

Таблица без дубликатов

![image](https://github.com/user-attachments/assets/bb895c80-a1d1-46f2-859b-0bd5e993cb04)

# 2
Есть две таблицы A и B. В каждой таблице есть колонка C. Составьте запрос так, чтобы результатом запроса стала выборка непересекающегося множества значений колонки C из таблиц A и B.

создание таблицы B

![image](https://github.com/user-attachments/assets/03deb52b-bf47-4f6b-9c44-8485ecb1a909)

Наполнение таблицы B

![image](https://github.com/user-attachments/assets/5bed0923-3ecc-4275-8adc-3abf7561e47d)

Получение выборка непересекающегося множества значений колонки C

![image](https://github.com/user-attachments/assets/06c64c85-86b7-48c2-a58c-e3eb52df83a7)

Полученная выборка

![image](https://github.com/user-attachments/assets/b124c6b9-1e06-46b3-ad58-d4f539cdfaa8)

# 3
Создайте структуру базы данных для решения следующей задачи: У управляющей компании стоит задача создать реестр квартир и жильцов дома. При этом нужно понимать, в каком подъезде и на каком этаже находится квартира. Количество квартир на этажах не всегда одинаковое. Количество квартир — 1471, подъездов — 7, этажей в доме — 17. Для квартир необходимо знать площадь и количество прописанных жильцов.


ERD схема БД

![image](https://github.com/user-attachments/assets/ea13729a-c08e-4e60-934c-03d6f3e6170d)

SQL скрипт

![image](https://github.com/user-attachments/assets/fa76387b-b115-458b-b590-8d3d4e83039a)

# Cost Per Month Calculation

## Задача

Есть массив заказов `orders`, в котором каждый заказ — это объект со следующей структурой:

```javascript
{
    id: number,           // Уникальный идентификатор заказа
    status: string,       // Статус заказа (например, "delivered", "pending" и т.д.)
    deliveryDate: string, // Дата доставки заказа
    items: [              // Массив товаров в заказе
        {
            productName: string, // Название товара
            price: number,       // Цена за единицу товара
            quantity: number     // Количество товара
        }
    ]
}
Необходимо выполнить следующие действия:

Отфильтровать все заказы со статусом "delivered".
Посчитать общую стоимость всех товаров в каждом заказе.
Сгруппировать заказы по месяцам доставки.
Вернуть объект, где ключ — название месяца, а значение — общая стоимость доставленных заказов за этот месяц.
Входные данные
Пример массива заказов:
javascript
Копировать код
const orders = [
    {
        id: 1,
        status: "delivered",
        deliveryDate: "2024-12-05",
        items: [
            { productName: "Item1", quantity: 2, price: 50 },
            { productName: "Item2", quantity: 1, price: 100 }
        ]
    },
    {
        id: 2,
        status: "pending",
        deliveryDate: "2024-10-12",
        items: [{ productName: "Item3", quantity: 1, price: 200 }]
    },
    // Остальные заказы...
];
Решение
JavaScript-функция:
javascript
Копировать код
function costPerMonth(orders) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return orders
        .filter(order => order.status === "delivered") // Фильтрация заказов со статусом "delivered"
        .reduce((result, order) => {
            const totalCost = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0); // Общая стоимость товаров
            const month = months[new Date(order.deliveryDate).getMonth()]; // Название месяца доставки
            if (!result[month]) {
                result[month] = 0;
            }
            result[month] += totalCost; // Добавление стоимости к соответствующему месяцу
            return result;
        }, {});
}
Вывод результата
javascript
Копировать код
console.log(costPerMonth(orders));
Результат выполнения
Пример результата для заданных данных:
javascript
Копировать код
{
    December: 200,
    September: 340,
    October: 900,
    January: 440
}
Визуализация результата:



