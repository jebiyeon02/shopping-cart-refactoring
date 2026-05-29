const MAX_NAME_LENGTH = 100;

export function validateProductName(name: string): string | null {
  if (name.length === 0 || name.length > MAX_NAME_LENGTH) {
    return "상품명은 1~100자여야 합니다";
  }
  return null;
}

export function validateProductPrice(price: string): string | null {
  if (Number(price) <= 0) {
    return "가격은 0보다 커야 합니다";
  }
  return null;
}
