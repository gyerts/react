const { compose } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireTypescript = require('react-app-rewire-typescript');

module.exports = compose(
   rewireLess,
   rewireTypescript,
);

module.exports = function(config, env){
   const rewires = compose(
      rewireLess,
      rewireTypescript,
   );
   return rewires(config, env);
};
