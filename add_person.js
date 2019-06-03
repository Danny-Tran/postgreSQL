
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'test_db'
    }
});

knex.select('*').from('famous_people').asCallback((err,res) =>{
    knex('first_name').where ({
        name:'Paul'
    })
})