import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as (
        req: Request,
      ) => string | null,
      secretOrKey: 'MY_SECRET_KEY', // ⚠️ 환경변수로 관리 추천
    });
  }

  validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
