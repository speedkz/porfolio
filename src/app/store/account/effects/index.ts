import { UsersEffect } from './users.effects';
import { AuthEffect } from "./auth.effects"

export const effects = [
  UsersEffect,
  AuthEffect
];

export * from './users.effects';
export * from "./auth.effects";