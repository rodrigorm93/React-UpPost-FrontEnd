export const fileUpload = async (file) => {
  //subir imagen a cloudinary
  const cloudUrl = "https://api.cloudinary.com/v1_1/ddmzi0ccp/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "reactJournal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    //si todo salio bien
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
