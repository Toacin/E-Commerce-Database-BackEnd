const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      validate: {
        isDecimal: true,
      },
      references: {
        model: 'product',
        key: 'id',
      }
    }, 
    tag_id: {
      type: DataTypes.INTEGER,
      validate: {
        isDecimal: true,
      },
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
