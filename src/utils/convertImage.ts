export const convertImage = (file: File): Promise<string> => {
  return new Promise<string>((result) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      result(reader.result as string);
    };

    reader.readAsDataURL(file);
  });
};
