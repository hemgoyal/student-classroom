const student = (sequelize, DataTypes) => {
  const Student = sequelize.define("student", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
  });

  return Student;
}

export default student;
