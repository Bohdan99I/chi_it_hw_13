# chi_it_hw_12

## Домашнє завдання

Використовуючи матеріал лекції написати бек енд додаток по наступному ТЗ:

Використовуючи варіант з чистим експрес (Без класів, тобто routing-controllers) реалізувати такі ендпоінти:

- **GET:** `/` - поверне автора програми у вигляді `{author: ....}`
- **GET:** `/users` - масив користувачів
- **POST:** `/users` - створює користувача, приймає JSON `{user, email}`
- **PATCH:** `/users/:id` - змінює мене користувача
- **DELETE:** `/users/:id` - видаляє користувача за ID

Користувачів зберігаємо у файлі вигляді JSON переробленого в рядок.
