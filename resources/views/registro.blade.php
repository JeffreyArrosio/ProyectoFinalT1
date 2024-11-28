<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Formulario de Compostaje</h1>
    <form action="/registro" method="post" enctype="multipart/form-data">
        @csrf
        <label for="user">Usuario:</label>
        <input type="text" name="user" value="{{ Auth::user()->id}}" readonly><br><br>

        <label for="compostera">Compostera:</label>
        <input type="text" id="compostera" name="compostera" value="1" readonly><br><br>

        <label for="temperatura_ambiental">Temperatura Ambiental:</label>
        <input type="number" id="temperatura_ambiental" name="temperatura_ambiental"><br><br>

        <label for="temperatura_compostera">Temperatura Compostera:</label>
        <input type="number" id="temperatura_compostera" name="temperatura_compostera"><br><br>

        <label for="nivel_llenado_inicial">Nivel de Llenado Inicial:</label>
        <input type="number" step="0.01" id="nivel_llenado_inicial" name="nivel_llenado_inicial"><br><br>

        <label for="olor">Olor:</label>
        <input type="text" id="olor" name="olor"><br><br>

        <label for="presencia_insectos">Presencia de Insectos:</label>
        <select id="presencia_insectos" name="presencia_insectos">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select><br><br>

        <label for="humedad">Humedad:</label>
        <select id="humedad" name="humedad">
            <option value="Exceso">Exceso</option>
            <option value="Buena">Buena</option>
            <option value="Defecto">Defecto</option>
        </select><br><br>

        <label for="fotografias_iniciales">Fotografías Iniciales:</label>
        <input type="file" id="fotografias_iniciales" name="fotografias_iniciales"><br><br>

        <label for="observaciones_iniciales">Observaciones Iniciales:</label>
        <textarea id="observaciones_iniciales" name="observaciones_iniciales"></textarea><br><br>

        <label for="riego">Riego:</label>
        <select id="riego" name="riego">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select><br><br>

        <label for="revolver">Revolver:</label>
        <select id="revolver" name="revolver">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select><br><br>

        <label for="aporte_verde">Aporte Verde:</label>
        <input type="number" id="aporte_verde" name="aporte_verde"><br><br>

        <label for="tipo_aporte_verde">Tipo de Aporte Verde:</label>
        <input type="text" id="tipo_aporte_verde" name="tipo_aporte_verde"><br><br>

        <label for="aporte_seco">Aporte Seco:</label>
        <input type="number" id="aporte_seco" name="aporte_seco"><br><br>

        <label for="tipo_aporte_seco">Tipo de Aporte Seco:</label>
        <input type="text" id="tipo_aporte_seco" name="tipo_aporte_seco"><br><br>

        <label for="fotografias_durante">Fotografías Durante:</label>
        <input type="file" id="fotografias_durante" name="fotografias_durante"><br><br>

        <label for="observaciones_durante">Observaciones Durante:</label>
        <textarea id="observaciones_durante" name="observaciones_durante"></textarea><br><br>

        <label for="nivel_llenado_final">Nivel de Llenado Final:</label>
        <input type="number" step="0.01" id="nivel_llenado_final" name="nivel_llenado_final"><br><br>

        <label for="fotografias_finales">Fotografías Finales:</label>
        <input type="file" id="fotografias_finales" name="fotografias_finales"><br><br>

        <label for="observaciones_finales">Observaciones Finales:</label>
        <textarea id="observaciones_finales" name="observaciones_finales"></textarea><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>

</html>