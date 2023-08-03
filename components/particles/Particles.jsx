import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';


export const Particles = () => {


    const animate = useRef(false);

    const logoRef = useRef(null);
    const canvasRef = useRef(null);
    const effect = useRef(null);

  
    useEffect(() => {
        const init = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            //write a function that turns base64 image into particles that repel from the mouse
                const radius = 3000
    
        
    
            class Particle {
                constructor({ effect, x, y, color }) {
                    this.effect = effect;
                    this.x = Math.random() * this.effect.width;
                    this.originX = Math.floor(x)
                    this.y = Math.random() * this.effect.height;
                    this.originY = Math.floor(y)
                    this.size = this.effect.gap;
                    this.color = color;
                    this.vx = 0//Math.random() * 2 - 1
                    this.vy = 0//Math.random() * 2 - 1
                    this.ease = .5
                    this.dx = 0;
                    this.dy = 0;
                    this.distance = 0;
                    this.force = 0;
                    this.angle = 0;
                    this.friction = 0.95
                }
    
                //method to draw individual particle
                draw(ctx) {
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x, this.y, this.size, this.size);
                }
    
                //check particle, check mouse, move the particle, draw the particle
                update() {
                    this.dx = this.x - mouse.x;
                    this.dy = this.y - mouse.y;
    
                    this.distance = this.dx * this.dx + this.dy * this.dy
                    this.force = -radius / this.distance;
    
                    this.x += (this.originX - this.x) * this.ease;
                    this.y += (this.originY - this.y) * this.ease;
        
    
                    if (this.distance < radius) {
                        this.angle = Math.atan2(this.dy, this.dx);
                        this.vx += this.force * Math.cos(this.angle)
                        this.vy += this.force * Math.sin(this.angle) 
                    }
    
                    this.x += (this.vx  *= this.friction) * (this.originX - this.x) * this.ease;
                    this.y += (this.vy  *= this.friction) * (this.originY - this.y) * this.ease;
                    
                }
    
                edges() {
                    if (this.x + this.size > this.effect.width) {
                        this.vx = -this.vx;
                    }
                    if (this.x < 0) {
                        this.vx = -this.vx;
                    }
                    if (this.y + this.size > this.effect.height) {
                        this.vy = -this.vy;
                    }
                    if (this.y < 0) {
                        this.vy = -this.vy;
                    }
                }
    
                getDistance(x1, y1, x2, y2) {
                    this.dx = x2 - x1;
                    this.dy = y2 - y1;
                    return this.dx * this.dx + this.dy * this.dy;
                }
    
                resolveCollision(particle, otherParticle) {
                    const xVelocityDiff = particle.vx - otherParticle.vx;
                    const yVelocityDiff = particle.vy - otherParticle.vy;
    
                    const xDist = otherParticle.x - particle.x;
                    const yDist = otherParticle.y - particle.y;
    
                    // Prevent accidental overlap of particles
                    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    
                        // Grab angle between the two colliding particles
                        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
    
                        // Store mass in var for better readability in collision equation
                        const m1 = 1;
                        const m2 = 1;
    
                        // Velocity before equation
                        const u1 = this.rotate(particle.vx, particle.vy, angle);
                        const u2 = this.rotate(otherParticle.vx, otherParticle.vy, angle);
    
                        // Velocity after 1d collision equation
                        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
    
                        // Final velocity after rotating axis back to original location
                        const vFinal1 = this.rotate(v1.x, v1.y, -angle);
                        const vFinal2 = this.rotate(v2.x, v2.y, -angle);
    
                        // Swap particle velocities for realistic bounce effect
                        particle.vx = vFinal1.x;
                        particle.vy = vFinal1.y;
    
                        otherParticle.vx = vFinal2.x;
                        otherParticle.vy = vFinal2.y;
                    }
                }
    
                rotate(velocityX, velocityY, angle) {
                    const rotatedVelocities = {
                        x: velocityX * Math.cos(angle) - velocityY * Math.sin(angle),
                        y: velocityX * Math.sin(angle) + velocityY * Math.cos(angle)
                    };
                    return rotatedVelocities;
                }
    
    
    
                collide() {
                    for (let i = 0; i < this.effect.particlesArray.length; i++) {
                        if (this === this.effect.particlesArray[i]) continue;
                        if (this.getDistance(this.x, this.y, this.effect.particlesArray[i].x, this.effect.particlesArray[i].y) - this.size * 2 < 0) {
                            this.resolveCollision(this, this.effect.particlesArray[i]);
                        }
                    }
                }
    
                collideWithMouse() {
                    // if within radius to mouse, begin to follow the mouse
    
    
    
    
                    if (this.getDistance(mouse.x, mouse.y, this.x, this.y) < radius + this.size) {
                        if (mouse.x < this.x && this.x < this.effect.width - this.size * 10) {
                            this.x += 10;
                        }
                        if (mouse.x > this.x && this.x > this.size * 10) {
                            this.x -= 10;
                        }
                        if (mouse.y < this.y && this.y < this.effect.height - this.size * 10) {
                            this.y += 10;
                        }
                        if (mouse.y > this.y && this.y > this.size * 10) {
                            this.y -= 10;
                        }
                    }
                }
    
                checkIfOffscreen() {
                    return (this.x + this.size < 0 || this.x - this.size > this.effect.width || this.y + this.size < 0 || this.y - this.size > this.effect.height)
                }
                moveTowardsMouse() {
                    if (this.x < mouse.x) {
                        this.x += 1;
                    }
                    if (this.x > mouse.x) {
                        this.x -= 1;
                    }
                    if (this.y < mouse.y) {
                        this.y += 1;
                    }
                    if (this.y > mouse.y) {
                        this.y -= 1;
                    }
                }
                 moveParticleTowardsScreen() {
                    if (this.x + this.size < 0) {
                        this.x = this.effect.width + this.size;
                    }
                    if (this.x - this.size > this.effect.width) {
                        this.x = -this.size;
                    }
                    if (this.y + this.size < 0) {
                        this.y = this.effect.height + this.size;
                    }
                    if (this.y - this.size > this.effect.height) {
                        this.y = -this.size;
                    }
    
                }
    
                flockToMouse() {
                    if (this.x < mouse.x) {
                        this.x += 1;
                    }
                    if (this.x > mouse.x) {
                        this.x -= 1;
                    }
                    if (this.y < mouse.y) {
                        this.y += 1;
                    }
                    if (this.y > mouse.y) {
                        this.y -= 1;
                    }
                }
    
            }
    
            class Effect {
                constructor(width, height) {
                    this.width = width;
                    this.height = height;
                    this.image =  logoRef.current
                    this.particlesArray = [];
                    this.centerX = this.width / 2;
                    this.centerY = this.height / 2;
                    this.x = this.centerX - this.image.width * .5;
                    this.y = this.centerY - this.image.height * .5;
                    this.gap = 1;
                    this.offscreen = 0;
                }
                init(ctx) {
                    ctx.drawImage(this.image, this.x, this.y)
                    const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
                    for (let y = 0; y < this.height; y += this.gap) {
                        for (let x = 0; x < this.width; x += this.gap) {
                            const index = (y * this.width + x) * 4;
                            const red = pixels[index + 0];
                            const green = pixels[index + 1];
                            const blue = pixels[index + 2];
                            const alpha = pixels[index + 3];
                            const color = `rgb(${red}, ${green}, ${blue})`;
    
                            if (alpha > 0) {
                                this.particlesArray.push(new Particle({ effect: this, x, y, color }));
                            }
    
                        }
                    }
                }
                draw(ctx) {
                    this.particlesArray.forEach(particle => {
                        particle.draw(ctx);
                    });
    
                }
                update() {
                    this.particlesArray.forEach(particle => {
                        particle.update();
    
                        // particle.collideWithmouse();
                        // particle.edges();
                    });
                }
    
                setOffscreen(val) {
                    this.offscreen += 1;
                }
                warp() {
                    this.particlesArray.forEach(particle => {
                        particle.flockToMouse();
                    });
    
                }
    
            }

            effect.current = new Effect(canvas.width, canvas.height)
            effect.current.init(ctx);
          
    
           animate.current = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                effect.current.draw(ctx);
                effect.current.update();
            }
            gsap.ticker.add(animate.current);
           
        }
        // init();
        
    },[ ] );
    return (
 <></>
            // <canvas id="splash-canvas" ref={canvasRef}/>
            // <img className='base-image' ref={logoRef} style={{ display: 'none', opacity: 0, margin: '0 auto' }} src={logo} alt="Cosentyx" />

    );
};