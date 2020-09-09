import {UserController} from "./controller/UserController";
import { AuthController } from "./controller/AuthController";
import { AddressController } from "./controller/AddressController";
import { CategoryController } from "./controller/CategoryController";
import { SubCategoryController } from "./controller/SubCategoryController";

export const Routes = [
    { method: "get", route: "/users", controller: UserController, action: "all" },
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" },
    { method: "post", route: "/users/create", controller: UserController, action: "createUser" },
    { method: "post", route: "/users/auth", controller: AuthController, action: "auth" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove" },

    { method: "get", route: "/address", controller: AddressController, action: "all" },
    { method: "get", route: "/address/:id", controller: AddressController, action: "one" }, 
    { method: "post", route: "/address", controller: AddressController, action: "save" },
    { method: "post", route: "/address/create", controller: AddressController, action: "createAddress" }, 
    { method: "delete", route: "/address/:id", controller: AddressController, action: "remove" },

    { method: "get", route: "/category", controller: CategoryController, action: "all" },
    { method: "get", route: "/category/:id/subcategorys", controller: CategoryController, action: "getAllSubCategorys" },
    { method: "get", route: "/category/:id", controller: CategoryController, action: "one" },
    { method: "post", route: "/category", controller: CategoryController, action: "save" },
    { method: "delete", route: "/category/:id", controller: CategoryController, action: "remove" },

    { method: "get", route: "/subcategory", controller: SubCategoryController, action: "all" },
    { method: "get", route: "/subcategory/:id", controller: SubCategoryController, action: "one" },
    { method: "post", route: "/subcategory", controller: SubCategoryController, action: "save" },
    { method: "delete", route: "/subcategory/:id", controller: SubCategoryController, action: "remove" },

];