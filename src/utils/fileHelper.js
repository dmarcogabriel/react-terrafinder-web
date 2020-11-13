export const loadBase64Image = async (file) =>
  new Promise((res, rej) => {
    try {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => res(e.target.result);
    } catch (error) {
      rej(error);
    }
  });
