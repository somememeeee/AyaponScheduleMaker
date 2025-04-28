const { createApp, ref } = Vue;

createApp({
  setup() {
    const count = ref('');
    const captureArea = ref(null);

    function makePng() {
      if (!captureArea.value) return;
      html2canvas(captureArea.value, {
        width: 1280,
        height: 720,
        useCORS: true,
        backgroundColor: null // 背景透明にしたくないなら消してOK
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'capture-1280x720.png';
        link.click();
      });
    }

    return {
      count,
      captureArea,
      makePng
    };
  }
}).mount('#app');
