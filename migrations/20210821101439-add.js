"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn("orders", "productList", {
        type: Sequelize.TEXT,
        after: "sellerId",
      });
      await queryInterface.addColumn("orders", "paymentMethode", {
        type: Sequelize.TEXT,
        after: "productList",
      });
      await queryInterface.addColumn("orders", "orderStatus", {
        type: Sequelize.TEXT,
        after: "paymentMethode",
      });
      await queryInterface.addColumn("orders", "paymentStatus", {
        type: Sequelize.TEXT,
        after: "orderStatus",
      });
      await queryInterface.addColumn("orders", "virtualAccount", {
        type: Sequelize.TEXT,
        after: "paymentStatus",
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn("orders", "productList");
      await queryInterface.removeColumn("orders", "paymentMethode");
      await queryInterface.removeColumn("orders", "orderStatus");
      await queryInterface.removeColumn("orders", "paymentStatus");
      await queryInterface.removeColumn("orders", "virtualAccount");
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};