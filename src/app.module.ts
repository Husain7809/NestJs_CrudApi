import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
