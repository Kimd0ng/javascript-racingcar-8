import { MissionUtils } from '@woowacourse/mission-utils';

export function advanceRound(cars) {
    cars.forEach((car) => {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (num >= 4) {
            car.position += 1;
        }
    });
}

export function printRound(cars) {
    cars.forEach((car) => {
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    MissionUtils.Console.print('');
}

export function getWinners(cars) {
    const maxPos = Math.max(...cars.map((c) => c.position));
    return cars.filter((c) => c.position === maxPos).map((c) => c.name);
}
