import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";

class TablesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables")
        .select()
        .orderBy("table_number");

      return response.json(tables);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {}

  async update(request: Request, response: Response, next: NextFunction) {}

  async remove(request: Request, response: Response, next: NextFunction) {}
}

export { TablesController };
