import { Exclude, Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { IsOverThan18YearsOld } from '../validators/IsOverThan18YearsOld.validator';
import { IsValidBirthday } from '../validators/IsValidBirthday.validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  cpf: string;

  @Type(() => Date)
  @IsDate()
  @IsValidBirthday({ message: 'Birthday need to be a valid date' })
  @IsOverThan18YearsOld({ message: 'User must be older than 18 years' })
  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Exclude({ toPlainOnly: true })
  password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  street: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  complement: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  country: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  zipcode: string;
}
