import { DataTypes } from "sequelize";
import db from "../db/index.js";

const Interaction = db.define(
  "Interaction",
  {
    pergunta: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resposta: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Interaction;
