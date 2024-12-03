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
        <input type="text" name="user" id="user" value="{{ Auth::user()->id}}" readonly><br><br>

        <label for="compostera">Compostera:</label>
        <input type="text" id="compostera" name="compostera" value="1" readonly><br><br>

        <input type="checkbox" id="inicio_ciclo" name="inicio_ciclo" value="inicio">
        <label for="inicio_ciclo">Inicio de ciclo</label><br><br>

        <label for="date">Fecha de registro: </label>
        <input type="datetime-local" id="date" name="date"><br><br>

        <label for="temperatura_ambiental">Temperatura Ambiental:</label>
        <input type="number" id="temperatura_ambiental" name="temperatura_ambiental"><br><br>
        @error('temperatura_ambiental')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="temperatura_compostera">Temperatura Compostera:</label>
        <input type="number" id="temperatura_compostera" name="temperatura_compostera"><br><br>
        @error('temperatura_compostera')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="nivel_llenado_inicial">Nivel de Llenado Inicial:</label>
        <input type="number" step="0.01" id="nivel_llenado_inicial" name="nivel_llenado_inicial"><br><br>
        @error('nivel_llenado_inicial')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="olor">Olor:</label>
        <input type="text" id="olor" name="olor"><br><br>
        @error('olor')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="presencia_insectos">Presencia de Insectos:</label>
        <select id="presencia_insectos" name="presencia_insectos">
            <option value="no" selected disabled>No Anotado</option>
            <option value="hormigas">Hormigas</option>
            <option value="moscas">Moscas</option>
            <option value="arañas">Arañas</option>
            <option value="cucarachas">Cucarachas</option>
            <option value="otros">Otros</option>
        </select><br><br>

        <label for="humedad">Humedad:</label>
        <select id="humedad" name="humedad">
            <option value="no" selected disabled>No Anotado</option>
            <option value="Exceso">Exceso</option>
            <option value="Buena">Buena</option>
            <option value="Defecto">Defecto</option>
        </select><br><br>

        <label for="fotografias_iniciales">Fotografías Iniciales:</label>
        <input type="file" id="fotografias_iniciales" name="fotografias_iniciales"><br><br>
        @error('fotografias_iniciales')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="observaciones_iniciales">Observaciones Iniciales:</label>
        <textarea id="observaciones_iniciales" name="observaciones_iniciales"></textarea><br><br>
        @error('observaciones_iniciales')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="riego">Riego:</label>
        <select id="riego" name="riego">
            <option value="no" selected disabled>No Anotado</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select><br><br>

        <label for="revolver">Revolver:</label>
        <select id="revolver" name="revolver">
            <option value="no" selected disabled>No Anotado</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select><br><br>
        @error('nivel_llenado_inicial')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="aporte_verde">Aporte Verde:</label>
        <input type="number" id="aporte_verde" name="aporte_verde"><br><br>
        @error('aporte_verde')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="tipo_aporte_verde">Tipo de Aporte Verde:</label>
        <input type="text" id="tipo_aporte_verde" name="tipo_aporte_verde"><br><br>
        @error('tipo_aporte_verde')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="aporte_seco">Aporte Seco:</label>
        <input type="number" id="aporte_seco" name="aporte_seco"><br><br>
        @error('aporte_seco')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="tipo_aporte_seco">Tipo de Aporte Seco:</label>
        <input type="text" id="tipo_aporte_seco" name="tipo_aporte_seco"><br><br>
        @error('tipo_aporte_seco')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="fotografias_durante">Fotografías Durante:</label>
        <input type="file" id="fotografias_durante" name="fotografias_durante"><br><br>
        @error('fotografias_durante')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="observaciones_durante">Observaciones Durante:</label>
        <textarea id="observaciones_durante" name="observaciones_durante"></textarea><br><br>
        @error('observaciones_durante')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="nivel_llenado_final">Nivel de Llenado Final:</label>
        <input type="number" step="0.01" id="nivel_llenado_final" name="nivel_llenado_final"><br><br>
        @error('nivel_llenado_final')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="fotografias_finales">Fotografías Finales:</label>
        <input type="file" id="fotografias_finales" name="fotografias_finales"><br><br>
        @error('fotografias_finales')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <label for="observaciones_finales">Observaciones Finales:</label>
        <textarea id="observaciones_finales" name="observaciones_finales"></textarea><br><br>
        @error('observaciones_finales')
        <span class="text-red-500">Campo mal puesto</span><br><br>
        @enderror

        <input type="checkbox" id="fin_ciclo" name="fin_ciclo" value="fin">
        <label for="fin_ciclo"> Fin de ciclo</label><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>

</html>