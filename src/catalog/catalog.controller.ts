import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CatalogService } from './catalog.service';
import { TenantGuard } from '../common/guards/tenant.guard';

@UseGuards(AuthGuard('jwt'), TenantGuard)
@Controller('catalog/products')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.catalogService.createProduct(req.tenantId, body);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.catalogService.findAll(req.tenantId);
  }

  @Get(':id')
  findOne(@Req() req: any, @Param('id') id: string) {
    return this.catalogService.findOne(req.tenantId, id);
  }

  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() body: any) {
    return this.catalogService.update(req.tenantId, id, body);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.catalogService.remove(req.tenantId, id);
  }
}
