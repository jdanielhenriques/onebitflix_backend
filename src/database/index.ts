import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "onebitflix_development",
  username: "onebitflix",
  password: "onebitflix",
  define: {
    underscored: true,
  },
});
