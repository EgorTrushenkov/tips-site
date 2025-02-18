const baseUrl = `https://api.telegram.org/bot6991724806:AAEvCntMq6V4H2YFu7Ap_R7wug5Du3oTw3E/`;
export const sendMessage = async (message: string): Promise<void> => {
  const encodedMessage = encodeURIComponent(message);
  const url = `${baseUrl}sendMessage?chat_id=-1002317037708&text=${encodedMessage}&parse_mode=HTML`;
  const response = await fetch(url);
  console.log(response);
}