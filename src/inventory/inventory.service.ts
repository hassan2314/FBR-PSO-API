import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  setStock(productId: string, branchId: string, quantity: number, lowStockAt = 5) {
    return this.prisma.stockItem.upsert({
      where: { productId_branchId: { productId, branchId } },
      update: { quantity, lowStockAt },
      create: { productId, branchId, quantity, lowStockAt },
    });
  }

  adjustStock(productId: string, branchId: string, delta: number) {
    return this.prisma.stockItem.update({
      where: { productId_branchId: { productId, branchId } },
      data: { quantity: { increment: delta } },
    });
  }

  findByBranch(branchId: string) {
    return this.prisma.stockItem.findMany({
      where: { branchId },
      include: { product: true },
    });
  }

  findLowStock(branchId: string) {
    return this.prisma.stockItem.findMany({
      where: { branchId, quantity: { lte: this.prisma.stockItem.fields.lowStockAt as any } },
      include: { product: true },
    });
  }
}
