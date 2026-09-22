import { PrismaService } from '../prisma/prisma.service';
export declare class CatalogService {
    private prisma;
    constructor(prisma: PrismaService);
    createProduct(tenantId: string, data: {
        name: string;
        price: number;
        taxRate?: number;
        categoryId?: string;
        sku?: string;
    }): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        tenantId: string;
        createdAt: Date;
        name: string;
        sku: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        taxRate: import("@prisma/client/runtime/library").Decimal;
        categoryId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(tenantId: string): import("@prisma/client").Prisma.PrismaPromise<({
        category: {
            id: string;
            tenantId: string;
            name: string;
        } | null;
        variants: {
            id: string;
            name: string;
            sku: string | null;
            priceDiff: import("@prisma/client/runtime/library").Decimal;
            productId: string;
        }[];
    } & {
        id: string;
        tenantId: string;
        createdAt: Date;
        name: string;
        sku: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        taxRate: import("@prisma/client/runtime/library").Decimal;
        categoryId: string | null;
    })[]>;
    findOne(tenantId: string, id: string): import("@prisma/client").Prisma.Prisma__ProductClient<({
        category: {
            id: string;
            tenantId: string;
            name: string;
        } | null;
        variants: {
            id: string;
            name: string;
            sku: string | null;
            priceDiff: import("@prisma/client/runtime/library").Decimal;
            productId: string;
        }[];
    } & {
        id: string;
        tenantId: string;
        createdAt: Date;
        name: string;
        sku: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        taxRate: import("@prisma/client/runtime/library").Decimal;
        categoryId: string | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(tenantId: string, id: string, data: Partial<{
        name: string;
        price: number;
        taxRate: number;
        categoryId: string;
    }>): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    remove(tenantId: string, id: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    createCategory(tenantId: string, name: string): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: string;
        tenantId: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
