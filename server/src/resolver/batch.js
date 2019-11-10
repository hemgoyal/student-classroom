export default {
  Query: {
    batches: async (parent, args, { models }) => {
      return await models.Batch.findAll();
    },

    batch: async (parent, { id }, { models }) => {
      return await models.Batch.findByPk(id, {
        include: [
          {
            model: models.Teacher,
            where: {
              id: id
            }
          }
        ]
      })
    }
  },

  Mutation: {
    createNewBatch: async (parent, {
      name,
      teacher_id,
      is_active
    }, { models }) => {
      return await models.Batch.create({
        name,
        teacher_id,
        is_active
      });
    },

    deleteBatch: async (parent, { id }, { models }) => {
      return await models.Batch.destroy({
        where: {
          id
        }
      });
    }
  }
}
