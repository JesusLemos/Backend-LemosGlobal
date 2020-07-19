'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('posts', [
    {
      "id_usuario":1,
      "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, est egestas rutrum aliquet, massa arcu tincidunt eros, in tempus sem lectus in quam. Fusce ut dolor ipsum. Integer ut leo porta, consectetur tellus vitae, finibus eros. Aliquam sodales ipsum metus, eleifend dapibus nisl maximus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris hendrerit ex ac erat dictum semper. Nunc egestas sollicitudin fringilla. Quisque bibendum tincidunt sem vitae laoreet."
    },
    {
      "id_usuario":1,
      "comentario": "Proin vestibulum at augue dignissim finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi convallis urna quis leo semper interdum. Mauris cursus lorem at sapien efficitur, a suscipit magna fermentum. Maecenas euismod rutrum orci ac consectetur. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent a porta leo. Pellentesque eu scelerisque purus." 
    },
    {
      "id_usuario":1,
      "comentario": "Donec sit amet diam bibendum, volutpat nibh sit amet, accumsan enim. Pellentesque suscipit eget lorem in vestibulum. Vivamus eu risus lacus. Proin sit amet odio id tortor feugiat vestibulum id vel dui. Proin sed ultricies ex. Curabitur luctus at leo elementum accumsan. Mauris ullamcorper quis lacus ac pulvinar. Donec dapibus sem feugiat faucibus hendrerit. Curabitur lorem nisi, lobortis eu porta quis, aliquet non ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
    },
    {
      "id_usuario":1,
      "comentario": "Duis egestas auctor enim, vel luctus felis gravida eu. Ut placerat molestie porttitor. Sed nec sapien tempus, faucibus leo eget, luctus lectus. Nunc viverra velit erat, eget faucibus erat varius in. Aliquam erat volutpat. Phasellus id erat auctor, facilisis nisl ac, commodo tellus. Praesent orci enim, suscipit quis vestibulum at."
    },
    {
      "id_usuario":1,
      "comentario": "Tempus ac neque. Ut imperdiet laoreet finibus. Quisque cursus aliquet felis, maximus rhoncus orci interdum ac. Donec ut tincidunt dui. Morbi ut pretium arcu. Mauris euismod orci et purus congue bibendum. Donec eget arcu sit amet lacus iaculis euismod et sit amet augue. Praesent id arcu egestas, viverra metus efficitur, accumsan turpis. In nunc leo, auctor sed auctor sed, fringilla et turpis."
    },
    {
      "id_usuario":1,
      "comentario": "Proin dapibus orci et lorem cursus, sit amet sagittis est egestas. Cras luctus pulvinar molestie. Nam vel enim ante. In mauris ipsum, lobortis eu imperdiet vel, fringilla sit amet neque. Phasellus interdum vitae quam ut ultrices. Aenean aliquam diam a ligula aliquam, sit amet mollis mauris semper. Suspendisse faucibus orci sit amet erat ultrices bibendum. "
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
