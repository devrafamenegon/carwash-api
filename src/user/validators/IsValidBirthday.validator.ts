import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint()
export class IsValidBirthdayConstraint implements ValidatorConstraintInterface {
  validate(
    birthday: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const date = new Date(birthday);
    return date.toString() !== 'Invalid Date';
  }
}

export function IsValidBirthday(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidBirthdayConstraint,
    });
  };
}
