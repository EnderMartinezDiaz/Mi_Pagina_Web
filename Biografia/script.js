document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main section");

    // Ocultar todas las secciones al inicio
    sections.forEach(section => section.style.display = "none");

    // Mostrar la sección "Inicio" por defecto
    document.getElementById("inicio").style.display = "block";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Ocultar todas las secciones
            sections.forEach(section => section.style.display = "none");

            // Obtener el ID de la sección a mostrar
            const targetSection = document.getElementById(this.getAttribute("data-target"));

            // Mostrar la sección correspondiente
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const clubButtons = document.querySelectorAll(".botones-clubes button");
    const infoClub = document.getElementById("info-club");

    // Datos de los clubes
    const clubes = {
        "sporting": "<h3>Sporting de Lisboa</h3><p>🔹 Año: 2002 - 2003<br>🔹 Cristiano debutó profesionalmente aquí antes de ser fichado por el Manchester United.</p><img src='Imagenes/sporting.jpg' alt='Cristiano en Sporting'>",
        "manutd": "<h3>Manchester United</h3><p>🔹 Años: 2003 - 2009 / 2021 - 2022<br>🔹 Ganó su primer Balón de Oro y múltiples títulos en la Premier League.</p><img src='Imagenes/manutd.jpg' alt='Cristiano en Manchester United'>",
        "realmadrid": "<h3>Real Madrid</h3><p>🔹 Años: 2009 - 2018<br>🔹 Se convirtió en el máximo goleador del club y ganó 4 Champions League.</p><img src='Imagenes/realmadrid.jpg' alt='Cristiano en Real Madrid'>",
        "juventus": "<h3>Juventus</h3><p>🔹 Años: 2018 - 2021<br>🔹 Ganó la Serie A y fue máximo goleador en Italia.</p><img src='Imagenes/juventus.jpg' alt='Cristiano en Juventus'>",
        "alnassr": "<h3>Al-Nassr</h3><p>🔹 Año: 2022 - Presente<br>🔹 Continúa su legado en Arabia Saudita.</p><img src='Imagenes/alnassr.jpg' alt='Cristiano en Al-Nassr'>"
    };

    
    clubButtons.forEach(button => {
        button.addEventListener("click", function () {
            const club = this.getAttribute("data-club");
            infoClub.innerHTML = clubes[club]; // Muestra la info del club seleccionado
        });
    });
});
