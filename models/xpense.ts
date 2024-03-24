import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "./index";

class Xpense extends Model {
  static associate(models: any) {
    Xpense.belongsTo(models.XpenseCard, { foreignKey: "cardId", as: "xpense_cards" });
  }
}

Xpense.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    cardId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'xpense_cards',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Xpense",
    tableName: "xpenses", 
  },
);
export default Xpense;
