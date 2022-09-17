export default function showHealth(data) {
  if (data.health) {
    const { health } = data;
    if (health > 50) {
      return 'healthy';
    }
    if (health <= 50 && health >= 15) {
      return 'wounded';
    }
    if (health < 15 && health >= 0) {
      return 'critical';
    }
    return null;
  }
  return null;
}
