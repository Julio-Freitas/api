const conn = require('./db');

module.exports = {

    contar (data, userID){
    
        return new Promise((resolve, reject)=>{
            conn.query('SELECT  * FROM tb_register JOIN  tb_users ON  tb_users.id = tb_register.userID  WHERE data = ? AND tb_users.id  = ?', [
                data,
                userID
            ], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    let exist = Number(JSON.stringify(results.length));
                    if(exist >= 1){
                        resolve('nOk');
                    }
                    else{
                        this.save();
                        resolve('pode registrar');
                    };
    
                }
            });
        });

    },


   save(entrada, saidaAlmoco, retornoAlmoco, saida, data, userID) {

        return  new Promise((resolve, reject)=>{

            conn.query('INSERT INTO tb_register (entrada, saidaAlmoco, retornoAlmoco, saida, data, userID) VALUES (?, ?, ?, ?, ?, ?)', [
                entrada,
                saidaAlmoco,
                retornoAlmoco,
                saida,
                data,
                userID
                
            ], (err, results) => {
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            })
        });
    }
}

