"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundle = void 0;
const index_1 = require("../api/index");
const unique_1 = require("../utils/unique");
async function getBundle(req, res, next) {
    try {
        const result = await Promise.allSettled([
            (0, index_1.requestData1)(),
            (0, index_1.requestData2)(),
            (0, index_1.requestData3)(),
        ]);
        const [data1, data2, data3] = result.map((item) => {
            return item.status === 'fulfilled' ? item.value : [];
        });
        const bundle = {
            data3: (0, unique_1.makeNamesUnique)(data3, 'name', 'id'),
            data1, data2,
        };
        res.status(200).json(bundle);
    }
    catch (error) {
        next(error);
    }
}
exports.getBundle = getBundle;
//# sourceMappingURL=bundle.js.map