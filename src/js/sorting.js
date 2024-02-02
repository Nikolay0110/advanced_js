export const player = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}


export const dict = ['name', 'level'];


export function sorting(mass, listSorting) {
    const massive = [];
    const dict = [];
    for (const elem in mass) {
        let prom = {
            key: elem,
            value: mass[elem]
        };
        if (listSorting.includes(elem)) {
            dict.push(prom);
            prom = {};
        } else {
            massive.push(prom);
            prom = {};
            }
        }
        massive.sort((a, b) => a.key < b.key ? -1 : 1);
        const total = dict.concat(massive);
        return total;
}

sorting(player, dict)