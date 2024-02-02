export const character = {
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


export function select(dict) {
    const total = []
    for (let i = 0; i < dict['special'].length; i++) {
        const object = dict['special'][i];
        let prom = {
            id: object.id,
            name: object.name,
            icon: object.icon,
            description: object.description
        }
        
        if (!('description' in object)) {
            prom.description = object.description || 'Описание не доступно'
            total.push(prom);
        } else {
            total.push(prom);

        }
    }
    return total;
}
