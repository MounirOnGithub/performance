import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
    secret: 'this is secret' // generate a secret key for jwt token, this should not be public but in CI/CD
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);