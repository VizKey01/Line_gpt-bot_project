import dotenv as load_dotenv;
import os


load_dotenv();
const TOKEN = os.getenv('TOKEN')

const TOKEN = "ywS7dLu5GCD3q4bbQ3azTzpL0fbAAKvHWq56yGSdu5Val/CsLH4n2I4mamKIodRTBy0sGKT0PpwVVdailgMCXtlk0mBN8CgNt1lplCUrEPTIzJmyaVQjt80avJMFffGSQgfmDbxbMefWAC50WfyNuAdB04t89/1O/w1cDnyilFU=";

const bot = new LineBotSdk.client(TOKEN);
function doPost(e) { bot.call(e, callback) };
function callback(e) {
  if (e.message.type == "text") {
    var textResult = AI(e.message.text)
      bot.replyMessage(e, [bot.textMessage(textResult)]); //Reply Message
  }
};

//Gs-gpt https://script.google.com/macros/s/AKfycbyZlDFqX_AcaBlWdlMh8wh0I4nqVIyzS1to-AbTY_gAYKMp-ouqCjSmJaQ5L-CNZlAzRw/exec
//dialogflow https://dialogflow.cloud.google.com/v1/integrations/line/webhook/aea10b21-b858-40d8-a3b6-1f8a3cb85f02