const baseUrl = `https://api.telegram.org/bot6991724806:AAEA_Z9qdmEyqcxUkcXgHj5SqWfxj4U-QUo/`;
export const sendMessage = async (message: string): Promise<void> => {
  const encodedMessage = encodeURIComponent(message);
  const url = `${baseUrl}sendMessage?chat_id=-4255354951&text=${encodedMessage}&parse_mode=HTML`;
  const response = await fetch(url);
  console.log(response);
}