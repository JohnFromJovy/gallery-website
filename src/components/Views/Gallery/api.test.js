// jest.mock("./api.js");

// test("fetchDataFromAPI", () => {
//   return fetchDataFromAPI("query", "2").then(() => {
//     expect(data).toBe("peanut butter");
//   });
// });

let mockFn = jest.fn();

test("test ", () => {
  let result = mockFn(1, 2, 3);
});

test("测试jest.fn()内部实现", () => {
  let mockFn = jest.fn((query, page) => {
    return result;
  });
  // 断言mockFn执行后返回100
  expect(mockFn()).toBe(100);
});
