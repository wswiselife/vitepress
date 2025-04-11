## 常用高级结构

1. ### 函数接受一个对象和一个键，返回该对象中对应键的值

### - `getProperty` 函数

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

#### 特点

1. **函数声明**：
   - `getProperty` 是通过函数声明定义的。函数声明是一种显式地定义函数的方法，编译器会在整个作用域内提升这个函数。
2. **泛型函数**：
   - 使用了泛型参数 `T` 和 `K`，其中 `K` 被约束为 `T` 的键（`keyof T`）。
   - 这意味着 `getProperty` 可以操作任意类型的对象，并访问该对象上的有效属性。
3. **功能**：
   - 函数接受一个对象和一个键，返回该对象中对应键的值。
   - 类型系统会在编译时确保 `key` 是对象 `obj` 的一个合法键。
4. **调用方式**：
   - 通过函数名 `getProperty` 调用时，可以直接提供类型参数，也可以让 TypeScript 类型推断来确定类型。

### - `StringManipulator` 类型别名

```ts
type StringManipulator = (input: string) => string;

const capitalize: StringManipulator = (input) => input.toUpperCase();
```

#### 特点

1. **类型别名**：
   - `StringManipulator` 是一个类型别名，用于描述具有特定签名的函数类型。
   - 它描述的是一种函数类型，而不是具体的函数实现。
2. **函数表达式**：
   - `capitalize` 是一个函数表达式，通过变量赋值实现。
   - 函数表达式不会像函数声明那样被提升，且需要在定义后才能使用。
3. **固定类型**：
   - `StringManipulator` 明确指定了参数和返回值都是 `string` 类型，因此只能用于处理 `string` 类型的输入输出。
4. **灵活性**：
   - 适合用于定义函数签名，用于定义参数类型为函数的高阶函数中。
   - 多个不同的函数实现可以符合同一个类型签名。

### 二者的区别

1. **定义方式**：
   - `getProperty` 是一个具体的函数实现，使用了泛型和类型约束。
   - `StringManipulator` 是一个函数类型签名，用于定义某种特定结构的函数。
2. **使用场景**：
   - `getProperty` 适合于需要实现并调用某个具体功能的场合。
   - `StringManipulator` 适合用于约束某一类函数的参数和返回值类型，特别是在需要传递函数作为参数或返回值的场景下。
3. **类型灵活性**：
   - `getProperty` 函数具有更高的类型灵活性，允许操作不同类型的对象。
   - `StringManipulator` 是一个固定类型签名，专门用于处理字符串操作的函数。

### 例子总结

```ts
// 使用 getProperty 函数
const person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // 返回 "Alice"

// 使用 StringManipulator 类型
const shout: StringManipulator = (input) => input.toUpperCase() + "!";
const result = shout("hello"); // 返回 "HELLO!"
```

- `getProperty` 适合需要动态访问对象属性的场合，确保了属性访问的类型安全。
- `StringManipulator` 作为类型别名提供了一种定义和复用函数签名的方式，增强了代码的可读性和一致性。