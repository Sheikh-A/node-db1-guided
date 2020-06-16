//impor a config instance of knex

function getall() {
    return Knex('posts');
}

module.exports = getall;  