import { NextRequest, NextResponse } from "next/server";

function getConditionLabel(code: number): string {
  if (code === 0) return "CLEAR";
  if (code <= 3) return "PTLY_CLDY";
  if (code <= 48) return "FOG";
  if (code <= 57) return "DRIZZLE";
  if (code <= 67) return "RAIN";
  if (code <= 77) return "SNOW";
  if (code <= 82) return "SHOWERS";
  return "STORM";
}

export async function GET(request: NextRequest) {
  try {
    // Vercel injects these headers automatically — no external geolocation API needed
    const lat = request.headers.get("x-vercel-ip-latitude");
    const lon = request.headers.get("x-vercel-ip-longitude");
    const rawCity = request.headers.get("x-vercel-ip-city");
    const country = request.headers.get("x-vercel-ip-country");

    if (!lat || !lon) {
      return NextResponse.json({ error: "Geolocation unavailable" }, { status: 503 });
    }

    const wx = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    ).then((r) => r.json());

    const city = rawCity ? decodeURIComponent(rawCity) : (country ?? "Unknown");

    return NextResponse.json(
      {
        temp: Math.round(wx.current_weather.temperature),
        city,
        condition: getConditionLabel(wx.current_weather.weathercode),
        code: wx.current_weather.weathercode,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json({ error: "Weather fetch failed" }, { status: 503 });
  }
}
