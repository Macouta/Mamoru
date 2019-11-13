<template>
  <div id="container">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  name: "Home",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      target: {
        angle: 0,
        lookAtY: 0
      },
      lookAt: null,
      params: {
        elapsedTime: 0,
        angle: 0,
        spacing: 6,
        maxAngle: 90,
        cameraRadius: 150,
        radius: 50
      },
      clockParts: null,
      clock: null,
      texture: null,
      uniforms: {
        mixFactor: { value: 0 }
      }
    };
  },
  methods: {
    init() {
        
        class ClockTexture {
      constructor(width = 512, height = 256) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width = width;
        this.height = this.canvas.height = height;

        this.canvas.style.position = "fixed";
        this.canvas.style.bottom = "1rem";
        this.canvas.style.right = "1rem";
        this.clockParts = new THREE.Group();
        // document.body.appendChild(this.canvas)
      }
      getTime() {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours.toString().length === 1) hours = `0${hours}`;
        if (minutes.toString().length === 1) minutes = `0${minutes}`;
        if (seconds.toString().length === 1) seconds = `0${seconds}`;

        return {
          firstDigitHours: Math.floor((hours / 10) % 10),
          secondDigitHours: Math.floor((hours / 1) % 10),
          firstDigitMinutes: Math.floor((minutes / 10) % 10),
          secondDigitMinute: Math.floor((minutes / 1) % 10),
          firstDigitSeconds: Math.floor((seconds / 10) % 10),
          secondDigitSeconds: Math.floor((seconds / 1) % 10)
        };
      }
      renderDigit(digit) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "80px Helvetica";
        this.ctx.fillText(digit, this.canvas.width / 2, this.canvas.height / 2);

        let idata = this.ctx.getImageData(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
        let buffer = new Uint32Array(idata.data.buffer);
        let grid = 3;

        let positions = [];
        for (let y = 0; y < this.canvas.height; y += grid) {
          for (let x = 0; x < this.canvas.width; x += grid) {
            if (buffer[y * this.canvas.width + x]) {
              positions.push({
                x: x / 10 - this.canvas.width / 20,
                y: y / 10 - this.canvas.height / 20,
                z: 0
              });
            }
          }
        }
        positions.length = Math.ceil(positions.length / 3) * 3;

        let posArr = new Float32Array(positions.length);
        let posScale = 2;
        for (let i = 0; i < positions.length; i += 3) {
          posArr[i + 0] = positions[i].x * posScale;
          posArr[i + 1] = -positions[i].y * posScale;
          posArr[i + 2] = 0;
        }

        return posArr;
      }
    }
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.clock = new THREE.Clock();

      this.scene.add(this.clockParts);

      this.texture = new ClockTexture();
    },
    renderFrame() {
      this.renderer.render(this.scene, this.camera);

      let delta = this.clock.getDelta();
      this.params.elapsedTime += delta;
      // clockParts.position.y -= delta * 30

      this.camera.position.x +=
        (Math.sin(this.params.targetAngle) * this.params.cameraRadius -
          this.camera.position.x) *
        (delta * 3);
      this.camera.position.y +=
        (this.params.targetAngle * 20 - this.camera.position.y) * (delta * 3);
      this.camera.position.z +=
        (Math.cos(this.params.targetAngle) * this.params.cameraRadius - this.camera.position.z) *
        (delta * 3);
      this.lookAt.y += (this.target.lookAtY - this.lookAt.y) * 0.1;
      this.camera.lookAt(this.lookAt);

      this.params.uniforms.mixFactor.value += (1.0 - this.params.uniforms.mixFactor.value) * 0.2;
      this.params.uniforms.opacity.value += (1.0 - this.params.uniforms.mixFactor.value) * 0.12;

      window.requestAnimationFrame(this.renderFrame);
    },
    makeTimeGeometry(timeObj) {
      this.params.uniforms = {
        mixFactor: { value: 0 },
        opacity: { value: 0 }
      };
      let uniforms = this.params.uniforms;
      let digitsGroup = new THREE.Group();
      let material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
      uniform float mixFactor;

      attribute vec3 startPosition;

      void main () {
        vec3 newPosition = mix(startPosition, position, mixFactor);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        gl_PointSize = 10.0;
      }
    `,
        fragmentShader: `
      uniform float opacity;

      void main () {
        // vec2 center = vec2(0.5);
        // float dist = distance(center, gl_PointCoord);
        // if (dist < 0.5) gl_FragColor = vec4(0.8, 0.8, 0.8, 1.0 - dist);
        gl_FragColor = vec4(0.8, 0.8, 0.8, opacity);
      }
    `,
        transparent: true,
        blending: THREE.AdditiveBlending
      });

      for (let key in timeObj) {
        let charPositions = this.texture.renderDigit(timeObj[key]);

        let geometry = new THREE.BufferGeometry(charPositions.length);

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(charPositions, 3)
        );

        let startPositions = new Float32Array(charPositions.length);

        let count = charPositions.length;
        let offset = 200;
        for (let i = 0; i < count; i += 3) {
          let randX = (Math.random() * 2 - 1) * offset;
          let randY = (Math.random() * 2 - 1) * offset;
          let randZ = (Math.random() * 2 - 1) * offset;
          startPositions[i + 0] = randX;
          startPositions[i + 1] = randY;
          startPositions[i + 2] = randZ;
        }

        geometry.setAttribute(
          "startPosition",
          new THREE.BufferAttribute(startPositions, 3)
        );

        let mesh = new THREE.Points(geometry, material);
        mesh.position.set(
          Math.sin(this.params.angle) * this.params.radius,
          this.params.angle * 20,
          Math.cos(this.params.angle) * this.params.radius
        );

        if (key === "firstDigitMinutes")
          this.params.targetAngle = this.params.angle;

        mesh.lookAt(new THREE.Vector3(0, this.params.angle * 20, 0));
        mesh.rotation.y += (180 * Math.PI) / 180;

        this.params.angle +=
          (this.params.maxAngle * Math.PI) / 180 / this.params.spacing;
        digitsGroup.add(mesh);
      }
      this.clockParts.add(digitsGroup);
    },
    updateTime() {
      let maxNumbersCount = 4;
      this.makeTimeGeometry(this.texture.getTime());
      this.target.lookAtY = this.params.targetAngle * 20;
      if (this.clockParts.children.length > maxNumbersCount)
        this.clockParts.remove(this.clockParts.children[0]);
    },
    onresize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  },
  mounted() {
    this.init();
    let timeDigitsArr = this.texture.getTime();

    this.lookAt = new THREE.Vector3();

    this.makeTimeGeometry(timeDigitsArr);
    setInterval(this.updateTime, 1000);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x111111);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    document.body.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 20, 100);
    this.camera.lookAt(this.lookAt);

    let helper = new THREE.GridHelper(200, 20);
    // scene.add(helper)

    document.body.onresize = this.onresize;
    this.renderFrame();
  }
};
</script>
<style lang="stylus" scoped></style>