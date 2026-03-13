"use server";

import { ENV } from "varlock/env";

export async function logSecret(leak: boolean) {
  const secret = ENV.SECRET_ITEM;
  console.log("Server action - SECRET_ITEM:", secret);

  if (leak) {
    return { leaked: secret };
  }
  return { leaked: null, message: "Secret was logged server-side only" };
}
