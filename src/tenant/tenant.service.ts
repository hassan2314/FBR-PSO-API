import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  findBranches(tenantId: string) {
    return this.prisma.branch.findMany({ where: { tenantId } });
  }

  createTenant(name: string, ntn?: string) {
    return this.prisma.tenant.create({ data: { name, ntn } });
  }
}
