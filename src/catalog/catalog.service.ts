import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  createProduct(tenantId: string, data: { name: string; price: number; taxRate?: number; categoryId?: string; sku?: string }) {
    return this.prisma.product.create({
      data: { ...data, tenantId },
    });
  }

  findAll(tenantId: string) {
    return this.prisma.product.findMany({
      where: { tenantId },
      include: { category: true, variants: true },
    });
  }

  findOne(tenantId: string, id: string) {
    return this.prisma.product.findFirst({
      where: { id, tenantId },
      include: { category: true, variants: true },
    });
  }

  update(tenantId: string, id: string, data: Partial<{ name: string; price: number; taxRate: number; categoryId: string }>) {
    return this.prisma.product.updateMany({
      where: { id, tenantId },
      data,
    });
  }

  remove(tenantId: string, id: string) {
    return this.prisma.product.deleteMany({ where: { id, tenantId } });
  }

  createCategory(tenantId: string, name: string) {
    return this.prisma.category.create({ data: { name, tenantId } });
  }
}
