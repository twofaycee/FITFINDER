import {NextResponse} from "next/server";
export async function POST(request:Request){
  const body=await request.json().catch(()=>null);
  const image=body?.image;
  const occasion=String(body?.occasion||"Everyday");
  if(!image||typeof image!=="string") return NextResponse.json({error:"Image is required."},{status:400});
  const key=process.env.AI_GATEWAY_API_KEY;
  if(!key) return NextResponse.json({mode:"demo",category:"Hero piece",style:"Modern casual",colors:["neutral"],summary:"Add an AI Gateway key to enable visual clothing analysis."});
  const response=await fetch("https://ai-gateway.vercel.sh/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+key},body:JSON.stringify({model:"alibaba/qwen3.5-flash",messages:[{role:"user",content:[{type:"text",text:"You are FITFINDER, an AI personal stylist. Analyze this clothing item for "+occasion+". Return ONLY valid JSON with keys category, brand, colors (array), aesthetic, silhouette, summary. Be concise and never invent a brand if it cannot be seen."},{type:"image_url",image_url:{url:image,detail:"auto"}}]}],stream:false})});
  if(!response.ok) return NextResponse.json({mode:"demo",category:"Hero piece",style:"Modern casual",colors:["neutral"],summary:"Visual analysis is temporarily unavailable."});
  const result=await response.json();
  const text=result?.choices?.[0]?.message?.content||"";
  try{return NextResponse.json({mode:"ai",...JSON.parse(text)})}catch{return NextResponse.json({mode:"ai",category:"Hero piece",summary:text})}
}