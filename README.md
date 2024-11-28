# KRDS
#1
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

#2
Есть две таблицы A и B. В каждой таблице есть колонка C. Составьте запрос так, чтобы результатом запроса стала выборка непересекающегося множества значений колонки C из таблиц A и B.

создание таблицы B

![image](https://github.com/user-attachments/assets/698ac4cd-24c1-49bc-ae93-d075f22df671)

Наполнение таблицы B

![image](https://github.com/user-attachments/assets/cb1a6dcb-fb29-4ecf-ab27-952e9a4a902a)

Получение выборка непересекающегося множества значений колонки C



