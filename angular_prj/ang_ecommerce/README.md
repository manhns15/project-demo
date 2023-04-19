# AngEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- Json Server -->
+ Tìm kiếm trên REST API: 
  http://localhost:3000/users?name=Shona ("shona là tên người dùng")

+ Xử lý phân trang REST API: 
  http://localhost:3000/users?_limit=5&_page=2 ("_limit là số lượng trả về dữ liệu, _page là trang")
  
+ Xử lý phân loại RESR API: 
  http://localhost:3000/users?_sort=id&_order=DESC ("URL trên sẽ sắp xếp dữ liệu dựa trên cột Id, và nó sẽ được sắp xếp theo thứ tự giảm dần.")
