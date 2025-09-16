import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      console.log(request.query);
      return response.end(JSON.stringify(request.query));
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    path: `/products/:id`,
    controller: (request, response) => {
      console.log(request.params);
      return response.end("Produto removido com ID: " + request.params.id);
    },
  },
].map((route) => {
  return {
    ...route,
    path: parseRoutePath(route.path),
  };
});
