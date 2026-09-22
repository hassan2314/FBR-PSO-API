import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user) throw new ForbiddenException('Not authenticated');
    if (user.role === 'SUPER_ADMIN') return true;
    if (!user.tenantId) throw new ForbiddenException('No tenant assigned');

    req.tenantId = user.tenantId;
    return true;
  }
}
