let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff5733;"> Desarrollo sitios web y soy estudiante de Ingeniería.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
