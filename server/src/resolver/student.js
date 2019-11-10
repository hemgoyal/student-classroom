export default {
  Query: {
    students: async (parent, args, { models }) => {
      return await models.Student.findAll();
    },

    student: async (parent, { id }, { models }) => {
      return await models.Student.findByPk(id);
    }
  },

  Mutation: {
    createNewStudent: async (parent, {
      name,
      email,
      mobile,
      is_active
    }, { models }) => {
      return await models.Student.create({
        name,
        email,
        mobile,
        is_active
      });
    },

    deleteStudent: async (parent, { id }, { models }) => {
      return await models.Student.destroy({
        where: {
          id
        }
      });
    }
  }
}
