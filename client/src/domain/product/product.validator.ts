// 도메인 모델 책임

export const validateProductName = (name: string) => {
  if (name.length === 0 || name.length > 100) {
    throw new Error("상품명은 1~100자여야 합니다");
  }
};

export const validateProductPrice = (price: string) => {
  if (Number(price) <= 0) {
    throw new Error("가격은 0보다 커야 합니다");
  }
};
