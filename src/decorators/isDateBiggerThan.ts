import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class isDateBiggerThan implements ValidatorConstraintInterface {
  validate(dateTime: string, args: ValidationArguments) {
    const compareProperty = args.constraints[0];
    const compareValue = args.object[compareProperty];

    const endDate = new Date(dateTime).getTime();
    const startDate = new Date(compareValue).getTime();

    return endDate > startDate;
  }

  defaultMessage(args: ValidationArguments) {
    return 'End date should be biggest than start date';
  }
}
