import { MissionUtils } from '@woowacourse/mission-utils';

export function advanceRound(cars) {
    cars.forEach((car) => {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (num >= 4) {
            car.position += 1;
        }
    });
}
