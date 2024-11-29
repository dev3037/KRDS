-- Таблица подъездов
CREATE TABLE Entrances (
    entranceId int GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- Уникальный идентификатор подъезда
    entranceNumber int NOT NULL    -- Номер подъезда
);

-- Таблица этажей
CREATE TABLE Floors (
    floorId int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    -- Уникальный идентификатор этажа
    entranceId int NOT NULL,       -- Идентификатор подъезда (внешний ключ)
    floorNumber int NOT NULL,      -- Номер этажа
    FOREIGN KEY (entranceId) REFERENCES Entrances(entranceId)
);

-- Таблица квартир
CREATE TABLE Apartments (
    apartmentId int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    -- Уникальный идентификатор квартиры
    floorId int NOT NULL,              -- Идентификатор этажа (внешний ключ)
    apartmentNumber int NOT NULL,      -- Номер квартиры
    area DECIMAL(10, 2) NOT NULL,      -- Площадь квартиры
    registeredResidents int NOT NULL,  -- Количество прописанных жильцов
    FOREIGN KEY (floorId) REFERENCES Floors(floorId)
);

-- Таблица жильцов
CREATE TABLE Residents (
    residentId int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,      -- Уникальный идентификатор жильца
    fullName varchar(100) NOT NULL,     -- ФИО жильца
    birthDate DATE                   -- Дата рождения жильца
);

-- Связующая таблица
CREATE TABLE ApartmentResidents (
    apartmentId INT NOT NULL,           -- Идентификатор квартиры (внешний ключ)
    residentId INT NOT NULL,            -- Идентификатор жильца (внешний ключ)
    PRIMARY KEY (apartmentId, residentId),
    FOREIGN KEY (apartmentId) REFERENCES Apartments(apartmentId),
    FOREIGN KEY (residentId) REFERENCES Residents(residentId)
);
