import { Module, DynamicModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './jwt.constants';
import { AuthService } from './auth.service';

@Module({})
export class AuthModule {
  static register(config: {
    secret: string;
    expiresIn: string;
  }): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule,
        JwtModule.register({
          secret: config.secret,
          signOptions: { expiresIn: config.expiresIn },
        }),
      ],
      providers: [AuthService, JwtStrategy],
      exports: [AuthService],
    };
  }
}
