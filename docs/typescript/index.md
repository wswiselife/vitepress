# typescript

20240729

## 自带的类型

```js
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

## 索引类型查询

### 函数定义

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

#### 泛型参数

1. `<T, K extends keyof T>`

   ：

   - `T` 是一个泛型类型参数，表示传入对象的类型。
   - `K extends keyof T` 是另一个泛型类型参数，`keyof T` 是一个索引类型查询，它生成一个联合类型，该联合类型包含对象 `T` 所有属性的键。`K` 必须是 `T` 的属性键之一。

这意味着，`key` 参数必须是对象 `obj` 中存在的一个键，确保访问的是合法的属性。

#### 函数参数

- **`obj: T`**：表示传入的对象，其类型为 `T`。
- **`key: K`**：表示要访问的属性的键，必须是 `T` 的键之一。

#### 返回值

- **`return obj[key];`**：返回对象 `obj` 中键为 `key` 的属性值。TypeScript 类型系统保证 `key` 的合法性。

### 使用示例

```ts
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type '"m"' isn't assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

- **`getProperty(x, "a")`**：
  - 传入的键 `"a"` 是对象 `x` 的一个有效键，因此不会有错误。
  - 返回的值是 `x.a` 的值，即 `1`。
- **`getProperty(x, "m")`**：
  - 传入的键 `"m"` 不是对象 `x` 的一个有效键。
  - TypeScript 在编译时检查到 `"m"` 不在 `x` 的键 `"a" | "b" | "c" | "d"` 中，因此报错：参数类型 `"m"` 不能分配给参数类型 `'a' | 'b' | 'c' | 'd'`。