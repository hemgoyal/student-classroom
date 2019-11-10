const batch = (sequelize, DataTypes) => {
  const Batch = sequelize.define("batch", {
    name: DataTypes.STRING,
    teacher: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER,
  });

  return Batch;
}

export default batch;
