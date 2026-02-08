export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning ☀️";
  if (hour >= 12 && hour < 17) return "Good Afternoon 🌤️";
  if (hour >= 17 && hour < 21) return "Good Evening 🌙";
  return "Working Late 🌃";
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
