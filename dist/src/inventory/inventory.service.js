"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryService = class InventoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    setStock(productId, branchId, quantity, lowStockAt = 5) {
        return this.prisma.stockItem.upsert({
            where: { productId_branchId: { productId, branchId } },
            update: { quantity, lowStockAt },
            create: { productId, branchId, quantity, lowStockAt },
        });
    }
    adjustStock(productId, branchId, delta) {
        return this.prisma.stockItem.update({
            where: { productId_branchId: { productId, branchId } },
            data: { quantity: { increment: delta } },
        });
    }
    findByBranch(branchId) {
        return this.prisma.stockItem.findMany({
            where: { branchId },
            include: { product: true },
        });
    }
    findLowStock(branchId) {
        return this.prisma.stockItem.findMany({
            where: { branchId, quantity: { lte: this.prisma.stockItem.fields.lowStockAt } },
            include: { product: true },
        });
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map