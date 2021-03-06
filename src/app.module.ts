import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
// import {MainBodyController} from 'mainbody.controller';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { VegEnrollmentController } from './veg-enrollment.controller';
import { AnimalEnrollmentController } from './animal-enrollment.controller';
import {ConfigController} from './config.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController,UserController,VegEnrollmentController,ConfigController,AnimalEnrollmentController],
  providers: [AppService,AuthService,JwtStrategy],
})
export class AppModule {
}
