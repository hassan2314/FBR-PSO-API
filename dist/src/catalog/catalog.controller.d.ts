import { CatalogService } from './catalog.service';
export declare class CatalogController {
    private catalogService;
    constructor(catalogService: CatalogService);
    create(req: any, body: any): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        tenantId: string;
        createdAt: Date;
        name: string;
        sku: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        taxRate: import("@prisma/client/runtime/library").Decimal;
        categoryId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(req: any): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(req: any, id: string): import("@prisma/client").Prisma.Prisma__ProductClient<({
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
    update(req: any, id: string, body: any): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    remove(req: any, id: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
}
