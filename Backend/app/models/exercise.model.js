module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
      exercise_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Exercise;
  };