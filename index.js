const RandomColor = () => {
    const HEX = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += HEX[Math.floor(Math.random() * 12)];
    }

    return color;
  };

  const startcolor = () => {
    document.body.style.backgroundColor = RandomColor();
  };

  const start = document.getElementById("start");
  start.addEventListener("click", () => {
    const StopColor = setInterval(startcolor, 1000);
    
    const stop = document.getElementById("stop");
    stop.addEventListener("click", () => {
      clearInterval(StopColor);
    });
  });
