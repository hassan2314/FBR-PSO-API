"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const catalog_service_1 = require("./catalog.service");
describe('CatalogService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [catalog_service_1.CatalogService],
        }).compile();
        service = module.get(catalog_service_1.CatalogService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=catalog.service.spec.js.map