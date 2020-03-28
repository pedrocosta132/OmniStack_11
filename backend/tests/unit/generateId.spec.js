const generateId = require('../../src/utils/generateId');

describe('Generate unique id', () => {
    it('should generate an unique HEX id', () => {
        const id = generateId();

        expect(id).toHaveLength(8);
    })
});