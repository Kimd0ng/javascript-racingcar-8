export function parseAndValidateNames(line) {
    if (typeof line !== 'string') {
        throw new Error('[ERROR] 입력이 올바르지 않습니다.');
    }
    const names = line
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
    if (names.length === 0) {
        throw new Error('[ERROR] 자동차 이름은 비어 있을 수 없습니다.');
    }
    names.forEach((name) => {
        if (name.length === 0 || name.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 1~5자여야 합니다.');
        }
    });
    return names;
}

export function parseAndValidateTries(line) {
    if (!/^\d+$/.test(String(line))) {
        throw new Error('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    }
    const n = Number(line);
    if (!Number.isInteger(n) || n < 1) {
        throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
    return n;
}
