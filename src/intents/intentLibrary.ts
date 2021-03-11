import { TestIntent } from "./testIntent";
import { WelcomeIntent } from "./welcome";
import { FallbackIntent } from "./fallback";
import { SignInIntent } from "./signIn";

export const intentList = [
  WelcomeIntent,
  FallbackIntent,
  SignInIntent,
  TestIntent
];

export const defaultIntent = FallbackIntent;
