import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { UsersService } from "../../../users/src/services/users.service";
@Controller('auth')
export class AuthController {
    // constructor(private readonly userService: UsersService) { }

    // @Post('login')
    // async login(@Body() loginDto: LoginDto) {
    //     const { email, password } = loginDto;

    //     const user = await this.userService.findUserByEmail(email);

    //     if (!user) {
    //         // Handle when user is not found
    //         return { message: 'User not found.' };
    //     }

        // Perform password validation (you should use a secure password hashing mechanism, like bcrypt)
        // const isPasswordValid = await this.passwordService.comparePasswords(password, user.password);

        // if (!isPasswordValid) {
        //     // Handle invalid password
        //     return { message: 'Invalid password.' };
        // }

        // Return the user data (excluding the password) for the login view
        // const userForLoginView = {
            // id: user.id,
            // username: user.username,
            // email: user.email,
            // roles: user.roles,
        // };

    //     return userForLoginView;
    // }
}