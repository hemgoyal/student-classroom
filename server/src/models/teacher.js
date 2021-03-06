const teacher = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("teacher", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
  }, {
    underscored: true
  });

  return Teacher;
}

export default teacher;
