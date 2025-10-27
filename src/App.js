import { MissionUtils } from '@woowacourse/mission-utils';
import { parseAndValidateNames, parseAndValidateTries } from './validate/Validate.js';
import { advanceRound, printRound, getWinners } from './round/Round.js';

class App {
    async run() {
        const namesLine = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
        const names = parseAndValidateNames(namesLine);

        const triesLine = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        const tries = parseAndValidateTries(triesLine);

        MissionUtils.Console.print('\n실행 결과');

        const cars = names.map((name) => ({ name, position: 0 }));
        for (let round = 0; round < tries; round += 1) {
            advanceRound(cars);
            printRound(cars);
        }

        const winners = getWinners(cars);
        MissionUtils.Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
    }
}

export default App;
