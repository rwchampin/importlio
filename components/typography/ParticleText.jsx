'use client';

import gsap from 'gsap';
import { useMemo, useCallback, useEffect, useRef } from 'react';

const ParticleText = ({ desktop, mobile, colors }) => {
  const title = useRef(null);
  const canvas = useRef(null);
  const tela = useRef(null);
  const particles = useRef([]);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  const getSize = useCallback(() => {
    return window.innerWidth > 768 ? 80 : 65;
  }, []);

  function createCanvas(properties) {
    let canvas = document.createElement('canvas');
    canvas.width = window.innerWidth * .8;
    canvas.height = 300;
    let context = canvas.getContext('2d');
    return {
      canvas: canvas,
      context: context
    };
  }

  const getHeight = useCallback(() => {
    return window.innerWidth > 768 ? getSize() * 2 + 50 : getSize() * 4 + 50;
  }, [getSize]);
  
  const writeText = useCallback(
    (canvas, context, text) => {
      let size = getSize();
      context.font = size + 'px Montserrat-Bold';
      context.fillStyle = '#FFFFFF';
      context.textAlign = 'center';
      let lineheight = getSize();
      let lines = text.split('\n');
  
      for (let i = 0; i < lines.length; i++) {
        // Calculate text width
        let textWidth = context.measureText(lines[i]).width;
  
        // While the text width is too large, decrease the font size
        while (textWidth > canvas.width) {
          size--;
          context.font = size + 'px Montserrat-Black';
          textWidth = context.measureText(lines[i]).width;
        }
  
        let y =
          canvas.width / 2 +
          lineheight * i -
          (lineheight * (lines.length - 1)) / 3;
  
        context.fillText(lines[i], canvas.width/2, y);
      }
    },
    [getSize]
  );

  
  const maskCanvas = useCallback(() => {
    c3.current.context.drawImage(
      c2.current.canvas,
      0,
      0,
      c2.current.canvas.width,
      c2.current.canvas.height
    );
    c3.current.context.globalCompositeOperation = 'source-atop';
    c3.current.context.drawImage(c1.current.canvas, 0, 0);
    blur(c1.current.context, c1.current.canvas, 2);
  }, [c1, c2, c3]);

  function blur(ctx, canvas, amt) {
    ctx.filter = `blur(${amt}px)`;
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = 'none';
  }

  const populate = useCallback(() => {
    class Particle {
      constructor(canvas, options) {
        let random = Math.random();
        this.canvas = canvas;
        this.x = options.x;
        this.y = options.y;
        this.s = 3 + Math.random();
        this.a = 0;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.radius = 0.5 + Math.random() * 20;
        this.color = this.randomColor()
      }

      randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
      }

      randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      render() {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.canvas.lineWidth = 2;
        this.canvas.fillStyle = this.color;
        this.canvas.fill();
        this.canvas.closePath();
      }

      move() {
        //this.swapColor()
        this.x += Math.cos(this.a) * this.s;
        this.y += Math.sin(this.a) * this.s;
        this.a += Math.random() * 0.8 - 0.4;

        if (this.x < 0 || this.x > this.w - this.radius) {
          return false;
        }

        if (this.y < 0 || this.y > this.h - this.radius) {
          return false;
        }
        this.render();
        return true;
      }
    }

    particles.current.push(
      new Particle(canvas.current, {
        x: title.current.offsetWidth / 2,
        y: title.current.offsetWidth / 2
      })
    );
    return particles.current.length;
  }, [particles, canvas, title, colors]);

  const clear = useCallback(() => {
    const c = canvas.current;
    c.globalAlpha = 0.03;
    c.fillStyle = '#111111';
    c.fillRect(0, 0, tela.current.width, getHeight());
    c.globalAlpha = 1;
  }, [canvas, tela, getHeight]);

  const update = useCallback(() => {
    clear();
    particles.current = particles.current.filter(function (p) {
      return p.move();
    });
    maskCanvas();
  }, [clear, maskCanvas, particles]);

  useEffect(() => {
    const getText = () => {
      return window.innerWidth > 768 ? desktop : mobile;
    };
    c1.current = createCanvas({
      width: title.current.offsetWidth,
      height: getHeight()
    });
    c2.current = createCanvas({
      width: title.current.offsetWidth,
      height: getHeight()
    });
    c3.current = createCanvas({
      width: title.current.offsetWidth,
      height: getHeight()
    });

    gsap.ticker.add(populate);

    tela.current = c1.current.canvas;
    canvas.current = c1.current.context;



    title.current.replaceChildren(c3.current.canvas);

    writeText(c2.current.canvas, c2.current.context, getText());
    gsap.ticker.add(() => {
      update();
    });

    window.addEventListener('mousemove', () => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    return () => {
      gsap.ticker.remove(populate);
      gsap.ticker.remove(update);
    };
  }, [desktop, mobile, getHeight, writeText, populate, update]);

    // other existing code...

    useEffect(() => {
      function handleResize() {
        const getText = () => {
          return window.innerWidth > 768 ? desktop : mobile;
        };
  
        const newWidth = title.current.offsetWidth;
        const newHeight = getHeight();
  
        [c1.current, c2.current, c3.current].forEach((c) => {
          c.canvas.width = newWidth;
          c.canvas.height = newHeight;
        });
  
        writeText(c2.current.canvas, c2.current.context, getText());
      }
  
      window.addEventListener('resize', handleResize);
  
      // call handleResize initially to setup
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [desktop, mobile, getHeight, writeText]);
  
    // other existing code...

    
  return <div className="particle-text" ref={title}></div>;
};

export default ParticleText;