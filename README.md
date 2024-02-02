[![Build status](https://ci.appveyor.com/api/projects/status/80wg6asegm1sb7n7?svg=true)](https://ci.appveyor.com/project/Nikolay0110/advanced-js)

# Домашнее задание к лекции «Object, Reflection и Proxy»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## `for ... in`

### Легенда

В рамках разработки игры периодически нужно печатать таблички, отображающие свойства объектов. Вам нужно реализовать функцию, которая для переданного объекта возвращает массив его свойств со значениями, отсортированный по свойствам (порядок сортировки свойств - второй аргумент).

### Описание

Дан объект, например:
```js
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
```

Дан порядок сортировки свойств:
```javascript
["name", "level"]
```

Пример вызова вашей функции:
```js
orderByProps(obj, ["name", "level"])
```

После обработки вашей функцией:
```javascript
[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
]
```

Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки, для тех ключей, для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.

Используйте возможности `for-in` для перебора свойств объекта. Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функции, которую вы тестируете.

---

## Destructuring

### Легенда

При выборе конкретного пресонажа на поле необходимо во время боя на экране отображать доступные варианты спец.атак для этого персонажа. Это вам и предстоит сделать.

### Описание

Вам необходимо для панели выбора варианта атаки вытащить id, иконку и описание из объекта:
```javascript
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}
```

Но для некоторых (ещё недоступных) атак описание является засекреченным и не отображается:

```javascript
{
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...'
}
```

Напишите функцию с аргументом-деструктором, которая извлекает массив с нужными полями (`id`, `name`, `description`, `icon`) из объекта, а если значения для поля `description` нет - устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать извлечённый массив из объектов с четыремя полями.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функции, которую вы тестируете.
