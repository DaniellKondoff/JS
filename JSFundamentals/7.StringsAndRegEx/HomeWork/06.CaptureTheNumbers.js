/**
 * Created by Kondoff on 06-Oct-16.
 */
function captureNum(input) {
  let text=input.join(' ');
  let patern=/\d+/g;
    let numbers=text.match(patern)
    console.log(numbers.join(' '))
}
captureNum(["The300 What is that? I think it’s the 3rd movie.Lets watch it at 22:45"])