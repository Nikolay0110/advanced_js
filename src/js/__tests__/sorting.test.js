import { sorting, player, dict } from "../sorting";

test('тестирование сортировки в указанном порядке и по алфавиту', () => {
    const received = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ]

    expect(sorting(player, dict)).toEqual(received);
});