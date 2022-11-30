"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNamesUnique = void 0;
function makeNamesUnique(data, uniqueKey, unificatorKey) {
    const trackedUniqueNames = new Map();
    return data.map((item) => {
        let value = item[uniqueKey].toString();
        if (trackedUniqueNames.has(value)) {
            value = value + " " + item[unificatorKey].toString();
        }
        trackedUniqueNames.set(value, true);
        return { ...item, [uniqueKey]: value };
    });
}
exports.makeNamesUnique = makeNamesUnique;
//# sourceMappingURL=unique.js.map