import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryService {
    private prisma;
    constructor(prisma: PrismaService);
    setStock(productId: string, branchId: string, quantity: number, lowStockAt?: number): import("@prisma/client").Prisma.Prisma__StockItemClient<{
        id: string;
        branchId: string;
        productId: string;
        quantity: number;
        lowStockAt: number;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    adjustStock(productId: string, branchId: string, delta: number): import("@prisma/client").Prisma.Prisma__StockItemClient<{
        id: string;
        branchId: string;
        productId: string;
        quantity: number;
        lowStockAt: number;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByBranch(branchId: string): import("@prisma/client").Prisma.PrismaPromise<({
        product: {
            id: string;
            tenantId: string;
            createdAt: Date;
            name: string;
            sku: string | null;
            price: import("@prisma/client/runtime/library").Decimal;
            taxRate: import("@prisma/client/runtime/library").Decimal;
            categoryId: string | null;
        };
    } & {
        id: string;
        branchId: string;
        productId: string;
        quantity: number;
        lowStockAt: number;
        updatedAt: Date;
    })[]>;
    findLowStock(branchId: string): import("@prisma/client").Prisma.PrismaPromise<({
        product: {
            id: string;
            tenantId: string;
            createdAt: Date;
            name: string;
            sku: string | null;
            price: import("@prisma/client/runtime/library").Decimal;
            taxRate: import("@prisma/client/runtime/library").Decimal;
            categoryId: string | null;
        };
    } & {
        id: string;
        branchId: string;
        productId: string;
        quantity: number;
        lowStockAt: number;
        updatedAt: Date;
    })[]>;
}
