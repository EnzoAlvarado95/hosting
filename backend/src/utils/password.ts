// src/utils/password.ts
export function validatePassword(pw: string): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  if (pw.length < 8) errors.push("La contraseña debe tener al menos 8 caracteres.");

  if (!/[A-Z]/.test(pw)) errors.push("Debe contener al menos una letra mayúscula.");
  if (!/[a-z]/.test(pw)) errors.push("Debe contener al menos una letra minúscula.");
  if (!/[^A-Za-z0-9]/.test(pw)) errors.push("Debe contener al menos un carácter especial.");

  // no permitir números consecutivos (ej: 123, 89)
  if (/(?:012|123|234|345|456|567|678|789|890)/.test(pw)) errors.push("No permitir números consecutivos.");

  // no permitir letras consecutivas (abc, bcd, ...), tanto mayúsculas como minúsculas
  const lower = pw.toLowerCase();
  for (let i = 0; i < lower.length - 2; i++) {
    const a = lower.charCodeAt(i);
    const b = lower.charCodeAt(i + 1);
    const c = lower.charCodeAt(i + 2);
    if (b === a + 1 && c === b + 1 && /[a-z]/.test(lower[i] + lower[i+1] + lower[i+2])) {
      errors.push("No permitir letras consecutivas en orden alfabético (ej: abc).");
      break;
    }
  }

  return { ok: errors.length === 0, errors };
}
