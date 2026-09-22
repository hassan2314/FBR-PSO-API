import { PrismaService } from '../prisma/prisma.service';
export declare class TenantService {
    private prisma;
    constructor(prisma: PrismaService);
    findBranches(tenantId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        tenantId: string;
        name: string;
    }[]>;
    createTenant(name: string, ntn?: string): import("@prisma/client").Prisma.Prisma__TenantClient<{
        id: string;
        createdAt: Date;
        name: string;
        ntn: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
