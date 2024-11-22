# chi_it_hw_13

## Інструкція

## Підключення до бази даних PostgreSQL у терміналі Linux:

```bash
sudo -u postgres psql

---

# Create database and user:
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

---

# Just for information:
#Wiev tables:
SELECT * FROM users;
SELECT * FROM news_post ORDER BY created_at DESC;
SELECT * FROM news_post WHERE id = 1;

Change table structure:
ALTER TABLE news_post ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

###
---
###

# Create migration file, DO IT ONLY ONCE AFTER CHANGING TABLE STRUCTURE (Entity):

npx typeorm-ts-node-commonjs migration:generate ./src/migrations/InitialMigration --dataSource=src/ormconfig.ts

# Run migrations, Run it after changing table structure, or run project first time:

npx typeorm-ts-node-commonjs migration:run --dataSource=src/ormconfig.ts
```
