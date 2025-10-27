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
