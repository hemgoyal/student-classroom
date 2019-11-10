const batch = (sequelize, DataTypes) => {
  const Batch = sequelize.define("batch", {
    name: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
  }, {
    underscored: true
  });

  const Teacher = sequelize.import('./teacher')

  Batch.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
  });

  return Batch;
}

export default batch;
