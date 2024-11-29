-- Создание таблицы A
CREATE TABLE A (
    B varchar(10),
    C varchar(10),
    D varchar(10)
);

-- Вставка данных в таблицу A
INSERT INTO a (b, c, d) VALUES
('Молоко', 'Продукты', '100'),
('Хлеб', 'Продукты', '50'),
('Яблоки', 'Фрукты', '200'),
('Сахар', 'Продукты', '120'),
('Чай', 'Напитки', '300'),
('Кофе', 'Напитки', '500'),
('Масло', 'Продукты', '250'),
('Сыр', 'Молочные', '400'),
('Бананы', 'Фрукты', '180'),
('Шоколад', 'Сладости', '350');

-- Удаление дубликатов из таблицы A
DELETE FROM a
WHERE ctid NOT IN (
    SELECT MIN(ctid)
    FROM a
    GROUP BY b, c, d
);
