document.addEventListener("DOMContentLoaded", function() {
    // Initialize TypeIt
    new TypeIt("#typed-text", {
        speed: 200,
        waitUntilVisible: true,
        loop: true
      })
      .type("web developer.")
      .pause(200)
      .delete(14)
      .type("Freelancer.")
      .delete(10)
      .pause(200)
      .delete(10)
      .type("Student.") // Text to be typed
      .go(); // Start typing
  });