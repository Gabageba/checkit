import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@mail.ru', description: 'email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорркетный email' })
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'password' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
