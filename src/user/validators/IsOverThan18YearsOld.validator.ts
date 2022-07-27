import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint()
export class IsOverThan18YearsOldConstraint
  implements ValidatorConstraintInterface
{
  validate(
    birthday: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const date = new Date(birthday);
    const currentYear = new Date().getFullYear();
    const userYear = new Date(date).getFullYear();
    const userAge = currentYear - userYear;
    return userAge >= 18;
  }
}

export function IsOverThan18YearsOld(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsOverThan18YearsOldConstraint,
    });
  };
}
