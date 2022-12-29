module.exports = (sequelize, Sequelize) => {
    const User_Logs = sequelize.define("user_logs", {
      log_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firebase_id: {
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'firebase_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      exercise_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'exercises',
          key: 'exercise_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      weight: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      }
    });
  
    return User_Logs;
  };

  /*
  module.exports = (sequelize, Sequelize) => {
    const User_Logs = sequelize.define("user_logs", {
      log_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      exercise_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'exercises',
          key: 'exercise_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      weight: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      }
    });
  
    return User_Logs;
  };
  
  */