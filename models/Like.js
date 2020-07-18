'use strict';
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
 
} ,
 {tableName: 'likes'});
 
    return Like;

};