// // 同步 action
// export const addTodo = (data) => {
//   return {
//     data,
//     type: 'ADD_TODO'
//   }
// }

// // 异步 action
// export const addTodoAsync_1 = () => {
//   // 返回函数,其中有disatch参数
//   return (dispatch) => {
//     // ajax异步请求
//     fetch(url).then(data => {
//       // 执行异步action
//       dispatch(addTodo(data));
//     })
//   }
// }

// // --------------------------------------------

// // 异步 action
// async function addTodoAsync_2() {
//   const data = await fetch(url);
//   return {
//     data,
//     type: 'ADD_TODO'
//   }
// }

// export default addTodoAsync_2;



// function asy() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000)
//   })
// }

// async function test() {
//   await asy();
//   console.log(2);
// }

function test() {
  setTimeout(() => {
    console.log(1);
  }, 1000);
  console.log(2);
}

test();
