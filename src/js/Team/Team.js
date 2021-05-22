export class Team {
  [Symbol.iterator]() {
    const personNumber = Object.values(this);
    let index = 0;
    return {
      next() {
        if (index < personNumber.length) {
          return { done: false, value: personNumber[index++] };
        }
        return { done: true };
      },
    };
  }
}
