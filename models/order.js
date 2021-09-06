'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: {
          name: 'UserId'
        },
      });

      // Order.belongsTo(models.Seller, {
      //   as: "seller",
      //   foreignKey: "sellerId",
      //   targetKey: "id",
      // });
    
    }
  };

  Order.init({
    UserId: DataTypes.UUID,
    time: DataTypes.STRING,
    price: DataTypes.DOUBLE,

    productList: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },

    sellerId: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: null,
    },

    paymentMethode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },

    orderStatus: {
      type: DataTypes.ENUM,
      values: ['pending','proses','done'],
      allowNull: false,
      defaultValue: "pending",
    },

    paymentStatus: {
      type: DataTypes.ENUM,
      values: ['pending','expired','paid'],
      allowNull: false,
      defaultValue: "pending",
    },

    virtualAccount: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};