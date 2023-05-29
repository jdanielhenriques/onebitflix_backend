// src/models/index.ts

import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";


Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.hasMany(Episode);
Course.hasMany(Episode, { as: "episodes" });

Episode.belongsTo(Course);

export { Course, Category, Episode, User };
