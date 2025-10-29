import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    cases: defineTable({
        title: v.string(),
        summary: v.string(),
        date: v.string(),
        location: v.string(),
    }),
});