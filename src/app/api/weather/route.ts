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

function isPrivateIp(ip: string): boolean {
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.")
  );
}

export async function GET(request: NextRequest) {
  try {
    // Extract real client IP set by Vercel / reverse proxies
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : null;

    const geoUrl =
      clientIp && !isPrivateIp(clientIp)
        ? `https://ipapi.co/${clientIp}/json/`
        : "https://ipapi.co/json/";

    const geo = await fetch(geoUrl).then((r) => r.json());

    if (!geo.latitude) {
      return NextResponse.json({ error: "Geolocation unavailable" }, { status: 503 });
    }

    const wx = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current_weather=true`
    ).then((r) => r.json());

    return NextResponse.json(
      {
        temp: Math.round(wx.current_weather.temperature),
        city: geo.city || geo.country_name || "Unknown",
        condition: getConditionLabel(wx.current_weather.weathercode),
        code: wx.current_weather.weathercode,
      },
      {
        headers: {
          // Don't cache — each visitor has a different location
          "Cache-Control": "no-store",
        },
      }
    );
  } catch {
    return NextResponse.json({ error: "Weather fetch failed" }, { status: 503 });
  }
}
