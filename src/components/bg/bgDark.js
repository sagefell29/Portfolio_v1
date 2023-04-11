import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackgroundDark() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      z-index={-1}
      options={{
        background: {
          color: {
            value: '#1A202C',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            // push: {
            //   quantity: 2,
            // },
            repulse: {
              distance: 50,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: '#FFFFFF',
          },
          links: {
            color: '#3fa8ba',
            distance: 25,
            enable: true,
            opacity: 0.3,
            width: 5,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 75,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackgroundDark;