function detectDevice() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768 || isMobile) {
        window.location.href = "/about/";
      } else {
        window.location.href = "/aboutㅤ/";
      }
    }

    window.onload = detectDevice;
