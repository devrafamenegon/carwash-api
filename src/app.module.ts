import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user/controllers/user.controller';
import { User } from './user/entities/user.entity';
import { UserRepository } from './user/repositories/user.repository';
import { UserService } from './user/services/user.service';
import { UserModule } from './user/user.module';
import { IsOverThan18YearsOldConstraint } from './user/validators/IsOverThan18YearsOld.validator';
import { IsValidBirthdayConstraint } from './user/validators/IsValidBirthday.validator';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: 'carwash',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    IsOverThan18YearsOldConstraint,
    IsValidBirthdayConstraint,
    UserRepository,
  ],
})
export class AppModule {}
