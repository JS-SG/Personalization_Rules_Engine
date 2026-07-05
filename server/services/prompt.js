export const buildPrompt = (events) => `
You are an AI Ecommerce Personalization Engine.

A user's session events are:

${events.join("\n")}

Classify the shopper into ONE of the following:

- Browser
- Comparer
- Discount Seeker
- Cart Abandoner
- Loyal Customer

Return ONLY valid JSON.

{
  "shopperType":"",
  "confidence":0,
  "evidence":[
      "",
      "",
      ""
  ],
  "recommendedAction":"",
  "reason":""
}
`;