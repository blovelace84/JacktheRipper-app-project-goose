import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

http.route({
  path: "/assistant",
  method: "POST",
  handler: httpAction(async (ctx, req) => {
    const body = await req.json();
    const intent = body.intent?.name ?? "unknown";
    let text = "Sorry, I didn't understand that.";

    if (intent === "GetCaseSummary") {
      const title = body.parameters?.case ?? "Jack the Ripper";
      const result = await ctx.runAction("cases:getSummary", { title });
      text = result.short;
    }

    return new Response(JSON.stringify({ fulfillmentText: text }), {
      headers: { "Content-Type": "application/json" },
    });
  }),
});

export default http;
