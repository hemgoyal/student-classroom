export default {
  Query: {
    teachers: async (parent, args, { models }) => {
      return await models.Teacher.findAll();
    },

    teacher: async (parent, { id }, { models }) => {
      return await models.Teacher.findByPk(id)
    }
  },

  Mutation: {
    createNewTeacher: async (parent, {
      name,
      email,
      mobile,
      is_active
    }, { models }) => {
      return await models.Teacher.create({
        name,
        email,
        mobile,
        is_active
      });
    },

    deleteTeacher: async (parent, { id }, { models }) => {
      return await models.Teacher.destroy({
        where: {
          id
        }
      });
    }
  }
}
