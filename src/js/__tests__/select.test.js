import { select, character } from "../select";

test('проверка выполнения функции селект', () => {
    
    const received = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание не доступно'
        }
    ]
    expect(select(character)).toEqual(received);
});
