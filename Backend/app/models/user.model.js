module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    date: {
      type: Sequelize.STRING,
      allowNull: true
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    calories: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    bodyfat: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
    
    
  });

  return User;
};
