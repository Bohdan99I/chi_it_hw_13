# chi_it_hw_13

## Домашнє завдання

### Опис

Розробити бекенд-додаток, що реалізує функціонал для роботи з користувачами. Додаток має включати валідацію даних за допомогою декораторів та інтеграцію з базою даних PostgreSQL замість роботи з файлами.

---

### Технічне завдання

1. **Декоратор для перевірки даних:**

   - Реалізувати декоратор, який перевіряє коректність даних, що надходять у запити `POST` та `PATCH`.

2. **Інтеграція з PostgreSQL:**

   - Замінити зчитування та запис даних у файл на роботу з базою даних PostgreSQL.
   - Використовувати ORM (наприклад, TypeORM).
   - Реалізувати структуру таблиці для збереження користувачів:
     - Поля: `id` (унікальний ідентифікатор), `user` (ім'я користувача).

3. **API-методи:**
   - **GET /users**: Отримати список усіх користувачів.
   - **GET /users/:id**: Отримати користувача за ID.
   - **POST /users**: Створити нового користувача.
   - **PATCH /users/:id**: Оновити дані існуючого користувача.
   - **DELETE /users/:id**: Видалити користувача.

---

### Інструкція з налаштування

### 1. Встановлення залежностей

#Сonnect to postgres database in linux terminal:
sudo -u postgres psql

#Create database and user:
CREATE DATABASE lesson13;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE ROLE lesson13;
GRANT ALL PRIVILEGES ON DATABASE lesson13 TO lesson13;
ALTER ROLE lesson13 WITH PASSWORD 'password';
ALTER ROLE lesson13 WITH LOGIN;

\c - connect \c lesson13 - connect to database
\q - quit
\l - list databases
\d - show tables
\d table_name - show table structure

# Just for information:

#Wiev tables:
SELECT _ FROM users;
SELECT _ FROM news_post ORDER BY created_at DESC;
SELECT \* FROM news_post WHERE id = 1;

Change table structure:
ALTER TABLE news_post ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

###

# Create migration file, DO IT ONLY ONCE AFTER CHANGING TABLE STRUCTURE (Entity):

npx typeorm-ts-node-commonjs migration:generate ./src/migrations/InitialMigration --dataSource=src/ormconfig.ts

# Run migrations, Run it after changing table structure, or run project first time:

npx typeorm-ts-node-commonjs migration:run --dataSource=src/ormconfig.ts
