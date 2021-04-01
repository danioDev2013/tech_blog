const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Blog post
class Blog extends Model { }

//create fields/columns for blog model
Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        blog_content: {
            type: DataTypes.TEXT('medium'),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Blog'
    }
);

module.exports = Blog;