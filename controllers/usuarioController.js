
const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {


    // Extraer email y password
    const {email, password} = req.body;




    try {

        // Revisar que el usuario registrado sea unico 
        let usuario = await Usuario.findOne({ email });


        if(usuario){
            return res.status(400).json({msg: 'El usuario ya existe'});
        }



        // Crea el nuevo usuario 
        usuario = new Usuario(req.body);

        // Guarda el nuevo usuario 
        await usuario.save();

        // Mensaje de confirmacion
        res.json({msg: 'Usuario creado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.statis(400).send('Hubo un error');
    }
    
}

