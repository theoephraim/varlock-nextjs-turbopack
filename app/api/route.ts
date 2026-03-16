import { ENV } from "varlock/env";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const shouldLeak = request.nextUrl.searchParams.has("leak");

  console.log("API route - SECRET_ITEM:", ENV.SECRET_ITEM);

  const data: Record<string, string> = {
    APP_ENV: ENV.APP_ENV,
    ENV_SPECIFIC_ITEM: ENV.ENV_SPECIFIC_ITEM,
    VAR_FROM_UI: ENV.VAR_FROM_UI,
  };

  if (shouldLeak) {
    data.SECRET_ITEM = ENV.SECRET_ITEM;
  }

  return Response.json(data);
}
