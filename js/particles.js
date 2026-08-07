tsParticles.load("tsparticles", {
  fpsLimit: 60,

  background: {
    color: {
      value: "#050816"
    }
  },

  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        area: 1000
      }
    },

    color: {
      value: [
        "#ffffff",
        "#38bdf8",
        "#60a5fa"
      ]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: {
        min: 0.3,
        max: 1
      },
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.2,
        sync: false
      }
    },

    size: {
      value: {
        min: 1,
        max: 3
      }
    },

    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },

    links: {
      enable: true,
      distance: 170,
      color: "#38bdf8",
      opacity: 0.18,
      width: 1
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },

      onClick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {

      grab: {
        distance: 180,
        links: {
          opacity: 0.6
        }
      },

      push: {
        quantity: 5
      }
    }
  },

  detectRetina: true
});