﻿function parseCount(value) {
  const result = Number.parseFloat(value);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

//Task 2

/*class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return area.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return 'Ошибка! Треугольник не существует'
        },
        get perimeter() {
          return 'Ошибка! Треугольник не существует'
        }
      };
    }
  }
  */

  class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || b + c <= a || c + a <= b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c)
    } catch (error) {
      return {
        get area() {
          return ("Ошибка! Треугольник не существует");
        },
        get perimeter() {
          return ("Ошибка! Треугольник не существует");
        },
      };
    }
  }