export default function handler(req, res) {
    // 1. Solo permitimos el método POST para mayor seguridad
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido. Usa POST.' });
    }

    // 2. Extraemos los datos enviados desde el frontend
    const { username, password } = req.body;

    // 3. Lógica de validación (El "cerebro" del backend)
    // Aquí es donde en el futuro consultarías una base de datos
    if (username === 'admin' && password === '1234') {
        
        // Si todo es correcto, devolvemos un estado 200 (OK)
        return res.status(200).json({
            success: true,
            message: 'Autenticación exitosa',
            user: {
                name: 'Administrador de SpellingKids',
                role: 'admin'
            }
        });

    } else {
        
        // Si fallan las credenciales, devolvemos un estado 401 (No autorizado)
        return res.status(401).json({
            success: false,
            message: 'Usuario o contraseña incorrectos'
        });
    }
}
