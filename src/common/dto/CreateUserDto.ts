import { IsNotEmpty, Matches, Length, IsEmail } from 'class-validator';
import { REGEX, MESSAGES } from '../../modules/utils/app.util';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El usuario deberia tener un correo' })
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  @Length(8, 24)
  password: string;
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  confirmPassword: string;
}
