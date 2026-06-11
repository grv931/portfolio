class ParticleBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 120 };
    this.colors = ['#72e2ae', '#34afcb', '#20BEFF'];

    this.init();
    this.animate();

    window.addEventListener('resize', () => this.init());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particles = [];
    // Adjust density based on screen space
    const density = Math.floor((this.canvas.width * this.canvas.height) / 15000);
    const maxParticles = Math.min(density, 100);
    
    for (let i = 0; i < maxParticles; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height, this.colors));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.canvas.width, this.canvas.height, this.mouse);
      this.particles[i].draw(this.ctx);
    }
    this.connect();
    requestAnimationFrame(() => this.animate());
  }

  connect() {
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        let dx = this.particles[a].x - this.particles[b].x;
        let dy = this.particles[a].y - this.particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          let opacity = 1 - (distance / 120);
          this.ctx.strokeStyle = `rgba(114, 226, 174, ${opacity * 0.15})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }
}

class Particle {
  constructor(w, h, colors) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 4;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  update(w, h, mouse) {
    if (this.x > w || this.x < 0) this.vx = -this.vx;
    if (this.y > h || this.y < 0) this.vy = -this.vy;

    if (mouse.x !== null && mouse.y !== null) {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        let force = (mouse.radius - dist) / mouse.radius;
        this.x += (dx / dist) * force * 0.8;
        this.y += (dy / dist) * force * 0.8;
      }
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}

// Instantiate the background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => new ParticleBackground('particle-canvas'));
