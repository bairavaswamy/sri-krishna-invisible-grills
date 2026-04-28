// Review and rating rich snippet helpers are intentionally disabled.
// import { generateRatingSchema, generateReviewSchema } from "./utils";

export function buildFullSchema(location: string, slug: string, faqs: any[]){

return {

"@context":"https://schema.org",
"@type":"LocalBusiness",
"name":"Rohini Invisible Grills",
"areaServed":location,
"url":"https://rohiniinvisiblegrills.com/"+slug,
"description":"Balcony invisible grill installation service in "+location,

// Review/rating rich snippet schema disabled until verified first-party reviews are available.
// "aggregateRating": generateRatingSchema(),

// "review": generateReviewSchema(location),

"mainEntity":faqs.map(f=>({

"@type":"Question",
"name":f.question,
"acceptedAnswer":{
"@type":"Answer",
"text":f.answer
}

}))

}

}
