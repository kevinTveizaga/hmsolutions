import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE =
  'La contraseña deberia tener al menos 1 caracter mayúscula, minúscula junto a un número y un caracter especial';
const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = { PASSWORD_RULE };

export const MESSAGES = { PASSWORD_RULE_MESSAGE };

export const SETTINGS = { VALIDATION_PIPE };
