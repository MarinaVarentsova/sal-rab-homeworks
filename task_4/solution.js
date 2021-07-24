 // Задание 4.1. Вывод карточек товаров
 
 function parseProducts(JSON) {
    // Аргументом функции является JSON
 };
 parseProducts(json);
 // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    let data = JSON.parse(json);
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
 let products = data.products;
 return {products: data};

 // Напишите функцию renderProductsCards(json)
 // Аргументом функции является JSON
 function renderProductsCards(JSON) {
 };
 clearProducts();
 // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
 parseProducts(json)
 let products = console.log(parseProducts(json))
 // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
 // Запишите в переменную length значение свойства products.length
 let length = console.log(products.length)
 // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
 // и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
