const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./workshopDev.db')

db.serialize(function(){
    db.run( `
            CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT
                );            
            `)

/*      const query = `
    INSERT INTO ideas(
        image,
        title,
       category,
        description,
        link
    ) VALUES(?,?,?,?,?);`

       const values = [  
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de programação",
        "Estudo",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati facilis quas voluptate sit perferendis consequuntur nostrum!",
        "https://www.linkedin.com/in/lucas-g-79491abb/"    
   ]

        db.run(query, values, function(err){
      
        if (err) return console.log(err)
    
      console.log(this)
 })   */
 

    // Deletar um dado da tabela 
  /*    db.run(`DELETE FROM ideas WHERE id = ?`, [3,2,4], function(err){
        if (err) return console.log(err)

        console.log("DELETEI", this)
    })
 */
 
    //consultar dados na tabela
 /*    db.all(`SELECT * FROM ideas`, function(err, rows){
       if (err) return console.log(err)

       console.log(rows)
    }) */
})
module.exports = db
