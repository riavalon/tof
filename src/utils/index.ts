export function parseDateTimestamp(ts: string): string {
  const date = new Date(parseInt(ts, 10))
  return date.toLocaleDateString()
}
